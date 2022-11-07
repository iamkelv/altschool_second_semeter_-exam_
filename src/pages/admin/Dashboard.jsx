import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import img from "../../assets/img/img.webp";

import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMarkEmailUnread, MdKeyboardArrowDown } from "react-icons/md";
import { VscBellDot } from "react-icons/vsc";
import { AiOutlineMenu } from "react-icons/ai";

import { DiGoogleAnalytics } from "react-icons/di";
import {
  BiUserCircle,
  BiBuildings,
  BiTask,
  BiBarChartSquare,
  BiMenu,
} from "react-icons/bi";
import {
  BsFillBagCheckFill,
  BsBarChartLine,
  BsCircle,
  BsFileBarGraph,
} from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { BiFileBlank } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { BodyAnalytics } from "../../components/BodyAnalytics";

import { BodyTable } from "../../components/BodyTable";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/auth-slice";
import { Helmet } from "react-helmet";

export const Dashboard = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

  let activeClassName = "underline";

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
        <meta
          name="description"
          content="Welcome to altschool Student Exam Let's invest in your Future. Learn highly sought after tech skills without hassle. A program designed to arm you with the skills and knowledge required to boldly launch your tech careeR"
        />
        <link rel="canonical" href="/" />
        <meta
          name="keywords"
          content="Kelvin, Altschool, exam, google, Nkubuin"
        />
      </Helmet>
      {auth.login && (
        <div className={classes.container}>
          <div
            className={
              showSideBar
                ? `${classes.side__container}`
                : `${classes.side__container} ${classes.side__hide_nav}`
            }
          >
            <div className={classes.logo}>
              <span>Admin Dashboard</span>
            </div>

            <div className={classes.menu__wrapper}>
              <div>General Menu </div>
              <div>
                <ul>
                  <li>
                    <span>
                      <DiGoogleAnalytics />
                    </span>{" "}
                    <span>Analytic</span>
                  </li>
                  <li>
                    <span>
                      <BiUserCircle />{" "}
                    </span>{" "}
                    <span>Customers</span>
                  </li>
                  <li>
                    <span>
                      <BiBuildings />{" "}
                    </span>{" "}
                    <span>Companies</span>
                  </li>
                  <li>
                    <span>
                      <BsFillBagCheckFill />
                    </span>{" "}
                    <span>Trasactions</span>
                  </li>
                  <li>
                    <span>
                      <BsBarChartLine />
                    </span>{" "}
                    <span>Sale Report</span>
                  </li>
                  <li>
                    <span>
                      <BiTask />
                    </span>{" "}
                    <span>Task</span>
                  </li>
                  <li>
                    <span>
                      <BiBarChartSquare />
                    </span>{" "}
                    <span>Accounting</span>
                  </li>
                  <li>
                    <span>
                      <SlCalender />
                    </span>{" "}
                    <span>Calender</span>
                  </li>
                  <li>
                    <span>
                      <BsFileBarGraph />
                    </span>{" "}
                    <span>Recruitment</span>
                  </li>
                  <li>
                    <span>
                      <BiFileBlank />
                    </span>{" "}
                    <span>Training</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.active}>
              <div className={classes.active__head}>
                <span>Active members </span>{" "}
                <span>
                  <IoIosAdd
                    size={20}
                    color="red"
                    style={{
                      background: "white",
                      borderRadius: "50%",
                    }}
                  />
                </span>
              </div>
              <div>
                <ul>
                  <li>
                    <span>
                      <img src={img} alt="user" />
                    </span>
                    <span>Kelvin</span>
                    <BsCircle
                      style={{
                        background: "white",
                        borderRadius: "50%",
                        width: "6px",
                        height: "6px",
                      }}
                    />
                  </li>
                  <li>
                    <span>
                      <img src={img} alt="user" />
                    </span>
                    <span>Blessing</span>
                    <BsCircle
                      style={{
                        background: "white",
                        borderRadius: "50%",
                        width: "6px",
                        height: "6px",
                      }}
                    />
                  </li>
                  <li>
                    <span>
                      <img src={img} alt="user" />
                    </span>
                    <span>Godwin</span>
                    <BsCircle
                      style={{
                        background: "white",
                        borderRadius: "50%",
                        width: "6px",
                        height: "6px",
                      }}
                    />
                  </li>
                  <li>
                    <span>
                      <img src={img} alt="user" />
                    </span>
                    <span>Mercy</span>
                    <BsCircle
                      style={{
                        background: "white",
                        borderRadius: "50%",
                        width: "6px",
                        height: "6px",
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.body__container}>
            <div className={classes.body__nav}>
              <div className={classes.left}>
                <ul>
                  <span>
                    <AiOutlineMenu
                      size={20}
                      onClick={() => setShowSideBar(!showSideBar)}
                      style={{
                        cursor: "pointer",
                        color: "gray",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "white",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
                        borderRadius: "5px",
                      }}
                    />
                  </span>

                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    <li>Dashboard</li>
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    <li>Planner</li>
                  </NavLink>

                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    <li>Messages</li>
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    <li>Settings</li>
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    <li>Help Center</li>
                  </NavLink>
                </ul>
              </div>
              <div className={classes.right}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "5px",
                    }}
                  >
                    <BiMenu className={classes.harmbuger} size={20} />
                  </span>
                  <div>
                    <span>
                      <AiOutlineSearch size={20} />
                    </span>

                    <span>
                      <input type="text" placeholder="Search user" />
                    </span>
                  </div>
                </div>
                <div
                  className={classes.online}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "rgb(241,254,242)",
                      borderRadius: "10px",
                      padding: "10px 20px",
                      minWidth: "100px",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgb(102,193,128)",
                        minWidth: "10px",
                        borderRadius: "50%",
                        minHeight: "10px",
                      }}
                    ></span>{" "}
                    <span>Online</span>
                  </span>
                  <span>
                    <span
                      style={{
                        display: "flex",
                        alignContent: "center",
                        position: "relative",
                      }}
                    >
                      {" "}
                      <img
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          position: "relative",
                          left: "25px",
                          zIndex: 3,
                        }}
                        src={img}
                        alt=""
                      />
                      <img
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          position: "relative",
                          left: "19px",
                          zIndex: 2,
                        }}
                        src={img}
                        alt=""
                      />
                      <img
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          position: "relative",
                          left: "10px",
                          zIndex: 1,
                        }}
                        src={img}
                        alt=""
                      />
                      <img
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                        src={img}
                        alt=""
                      />
                    </span>
                  </span>
                </div>
                <div className={classes.notification}>
                  <span>
                    <MdOutlineMarkEmailUnread
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                    />
                  </span>
                  <span>
                    <VscBellDot
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                    />
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {" "}
                    <img
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                      }}
                      src={img}
                      alt=""
                    />{" "}
                    <span>
                      <MdKeyboardArrowDown
                        onClick={() => setShowProfile(!showProfile)}
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </span>
                  <span
                    className={!showProfile ? `${classes.hide__profile}` : ""}
                    style={{
                      position: "absolute",
                      top: "2rem",
                      width: "100px",
                      right: "-10px",
                      minHeight: "100px",
                      alignItems: "center",
                      padding: "5px",
                      background: "white",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
                      borderRadius: "10px",

                      zIndex: 4,
                      transition: "all 500ms ease",
                    }}
                  >
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0",
                      }}
                    >
                      <Link
                        to=""
                        style={{
                          textDecoration: "none",
                          color: "black",
                          width: "100%",
                          padding: "5px",
                        }}
                      >
                        Profile
                      </Link>
                      <Link
                        to=""
                        style={{
                          textDecoration: "none",
                          color: "black",
                          width: "100%",
                          padding: "5px",
                        }}
                      >
                        Password
                      </Link>
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          width: "100%",
                          padding: "5px",
                        }}
                        onClick={() => {
                          dispatch(authActions.logout(false));
                          localStorage.removeItem("isLoggedIn");
                          navigate("/");
                        }}
                      >
                        Logout
                      </Link>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <BodyAnalytics />
              <BodyTable />
            </div>
          </div>
        </div>
      )}
      {!auth.login && <Navigate to="/auth" replace />}
    </>
  );
};
