import { Link } from "react-router-dom";
import classes from "./MobileNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { uiSliceAction } from "../store/slices/ui-slice";

export const MobileNav = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { showMenu } = useSelector((state) => state.ui);

  return (
    <div className={classes.main}>
      <div
        className={
          !showMenu
            ? `${classes.container}`
            : `${classes.container} ${classes.show}`
        }
      >
        <div className={classes.close}>
          <AiOutlineClose
            size={25}
            onClick={() => dispatch(uiSliceAction.menu(false))}
          />
        </div>
        <div className={classes.menu__container}>
          <div className={classes.menu__wrapper}>
            <ul className={classes.menu_list}>
              {" "}
              <Link to="/">Home</Link>
              <Link to="/test">Test Boundary</Link>
            </ul>
          </div>
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
    </div>
  );
};
