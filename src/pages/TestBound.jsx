import classes from "./TestBound.module.css";
import { BsChatDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ErrorBound } from "../boundaries/Error";
import { Link } from "react-router-dom";
import { Pagination } from "../components/Pagination";
import useHttp from "../hooks/use-http";
import { userSliceAction } from "../store/slices/user-slice";
import { TableIsLoading } from "../components/ui/TableIloading";

export const TestBound = () => {
  const { isLoading, error, data } = useHttp(
    "https://randomuser .me/api/?results=100"
  );
  const [users, setUsers] = useState([...data]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const indexOfLastUser = currentPage * usersPerPage; // 9
  const indexOfFirstUser = indexOfLastUser - usersPerPage; //0
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser); // 1 to 100,

  const dispatch = useDispatch();
  const { getUsers } = useSelector((state) => state.users);

  const paginated = (users) => {
    setCurrentPage(users);
  };

  const nextPage = () => {
    return setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const userSearchHandler = (event) => {
    const value = event.target.value;

    const newSearch = users.filter((user) =>
      user.name.first.startsWith(value.charAt(0).toUpperCase() + value.slice(1))
    );
    setUsers(newSearch);
    console.log(newSearch);
  };

  useEffect(() => {
    console.log(isLoading);
    dispatch(userSliceAction.addUser(users));
    // console.log(getUsers);
    setUsers(data);
  }, [dispatch, data, users, isLoading]);

  return (
    <div className={classes.container}>
      <div className={classes.recent__users_head}>
        <span>Our Recent Students</span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            border: "1px solid gray",
            padding: "5px",
            borderRadius: "5px",
            outline: "none",
            width: "50%",
          }}
        >
          <span>
            <AiOutlineSearch />
          </span>
          <input
            style={{
              border: "none",
              outline: "none",
              fontWeight: "bold",
              color: "gray",
              textTransform: "capitalize",
              width: "100%",
              // minWidth: "100%",
            }}
            type="text"
            onChange={userSearchHandler}
            placeholder="Search user"
          />
        </span>
        <span>
          <input type="date" value="2013-01-08" />
        </span>
      </div>
      <div className={classes.table}>
        <table>
          <tr>
            <th style={{ fontWeight: "bolder", textAlign: "center" }}>
              <td sty>Name</td>
              <td className={classes.email__head}>Email Address</td>
              <td className={classes.cell__head}>Phone Number</td>
              <td>Gender</td>
              <td>Photo</td>
              <td>Action</td>
            </th>
          </tr>
          {isLoading && <TableIsLoading size={20} />}
          {!isLoading && error && <ErrorBound error={error} />}
          {!isLoading &&
            currentUser.map((user) => (
              <>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/user/${user.id.value}`}
                >
                  <tr className={classes.row}>
                    <td
                      className={classes.name}
                    >{`${user.name.first} ${user.name.last}`}</td>
                    <td className={classes.email}>{user.email}</td>
                    <td className={classes.cell}>{user.cell}</td>
                    <td className={classes.gender}>{user.gender}</td>
                    <td className={classes.image}>
                      <img
                        style={{
                          borderRadius: "50%",
                          width: "50px",
                          height: "50px",
                        }}
                        src={user.picture.medium}
                        alt=""
                      />
                    </td>
                    <td className={classes.action}>
                      <span>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={`/user/${user.id.value}`}
                        >
                          <BsChatDots />
                        </Link>
                      </span>
                      <span>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={`/user/${user.id.value}`}
                        >
                          <FiEdit />
                        </Link>
                      </span>
                      <span>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={`/user/${user.id.value}`}
                        >
                          <RiDeleteBinLine />
                        </Link>
                      </span>
                    </td>
                  </tr>
                </Link>
              </>
            ))}
        </table>
      </div>
      <div
        style={{
          display: "flex",
          margin: " auto",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Pagination
          usersPerPage={usersPerPage}
          pageNumber={paginated}
          paginated={paginated}
          data={currentUser}
          totalUsers={data.length}
          isLoading={isLoading}
          error={error}
          onClick={{ next: nextPage, prev: prevPage }}
        />
      </div>
    </div>
  );
};
