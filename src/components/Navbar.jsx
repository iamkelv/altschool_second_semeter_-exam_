import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../assets/img/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className={classes.container}>
      <div className={classes.logo__container}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={classes.menu__container}>
        <div className={classes.menu__wrapper}>
          <ul className={classes.menu_list}>
            {" "}
            <Link to="/">Home</Link>
            <Link to="/about">Test Boundary</Link>
          </ul>
        </div>
      </div>
      <div className={classes.Hamburger}>
        <GiHamburgerMenu size={30} />{" "}
      </div>
      <div className={classes.left__container}>
        <ul>
          {!auth.login && (
            <Link to="/auth">
              <button className={classes.login__container}>Login</button>
            </Link>
          )}
          <Link to="/auth">
            <button className={classes.start__container}>Get Start</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};
