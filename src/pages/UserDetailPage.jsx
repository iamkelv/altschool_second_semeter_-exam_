import { useParams } from "react-router-dom";
import classes from "./UserDetailPage.module.css";

import { useSelector } from "react-redux";

export const UserDetailPage = () => {
  const { getUsers } = useSelector((state) => state.users);
  const params = useParams();

  const submitHandler = (event) => {
    event.preventDefault();
    alert("You can't update user Info");
  };
  const userContent = getUsers.find((user) => user.id.value === params.id);
  console.log(userContent);

  return (
    <div className={classes.container}>
      <div className={classes.left__container}>
        <span className={classes.image_container}>
          <img src={userContent.picture.large} alt="" />
        </span>
        <span
          className={classes.detail_container}
        >{`${userContent.name.first} ${userContent.name.last}`}</span>
      </div>
      <div className={classes.right__container}>
        <div className={classes.edit_user}>
          {" "}
          <span> Edit User Profile Setting</span>
          <hr />
        </div>
        <div className={classes.form__container}>
          <form onSubmit={submitHandler}>
            <span
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <span
                style={{
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                }}
              >
                <label>First Name:</label>
                <input
                  type="text"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    outline: "none",
                    border: "1px solid rgb(225,225,225)",
                    borderRadius: "5px",
                    textTransform: "capitalize",
                  }}
                  placeholder="first name"
                  value={`${userContent.name.first}`}
                />
              </span>
              <span
                style={{ display: "flex", gap: "5px", flexDirection: "column" }}
              >
                <label>Last Name:</label>
                <input
                  type="text"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    outline: "none",
                    border: "1px solid rgb(225,225,225)",
                    borderRadius: "5px",
                    textTransform: "capitalize",
                  }}
                  placeholder="Last Name"
                  value={`${userContent.name.last}`}
                />
              </span>

              <span
                style={{ display: "flex", gap: "5px", flexDirection: "column" }}
              >
                <label>Date of Birth:</label>
                <input
                  type="date"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    outline: "none",
                    border: "1px solid rgb(225,225,225)",
                    borderRadius: "5px",
                  }}
                  value="2013-01-08"
                />
              </span>

              <span
                style={{ display: "flex", gap: "5px", flexDirection: "column" }}
              >
                <label>Email Address:</label>
                <input
                  type="email"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    outline: "none",
                    border: "1px solid rgb(225,225,225)",
                    borderRadius: "5px",
                  }}
                  value={`${userContent.email}`}
                />
              </span>

              <span
                style={{ display: "flex", gap: "5px", flexDirection: "column" }}
              >
                <label>Gender:</label>
                <select
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    outline: "none",
                    border: "1px solid rgb(225,225,225)",
                    borderRadius: "5px",
                  }}
                >
                  <option value="Male" key="1" selected>
                    {`${userContent.gender}`}
                  </option>
                  <option value="Male" key="1">
                    Mae
                  </option>
                  <option value="Male" key="1">
                    Female
                  </option>
                </select>
              </span>
              <span
                style={{ display: "flex", gap: "5px", flexDirection: "column" }}
              >
                <label>Country:</label>
                <input
                  type="text"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    outline: "none",
                    border: "1px solid rgb(225,225,225)",
                    borderRadius: "5px",
                  }}
                  value="Nigeria"
                />
              </span>
              <span
                style={{ display: "flex", gap: "5px", flexDirection: "column" }}
              >
                <label>City:</label>
                <input
                  type="text"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    outline: "none",
                    border: "1px solid rgb(225,225,225)",
                    borderRadius: "5px",
                  }}
                  value={`${userContent.location.city}`}
                />
              </span>
              <span
                style={{ display: "flex", gap: "5px", flexDirection: "column" }}
              >
                <label>Phone:</label>
                <input
                  type="text"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    outline: "none",
                    border: "1px solid rgb(225,225,225)",
                    borderRadius: "5px",
                  }}
                  value={`${userContent.phone}`}
                />
              </span>
              <span
                style={{ display: "flex", gap: "5px", flexDirection: "column" }}
              >
                <label>Date Registered:</label>
                <input
                  type="date"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    outline: "none",
                    border: "1px solid rgb(225,225,225)",
                    borderRadius: "5px",
                  }}
                  value="2000-02-02"
                  disabled
                />
              </span>
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <button
                style={{
                  display: "flex",
                  border: "none",
                  background: "rgb(57,50,216) ",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
