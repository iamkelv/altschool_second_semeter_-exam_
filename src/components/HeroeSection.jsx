import { Link } from "react-router-dom";
import classes from "./HeroSection.module.css";
import altschool from "../assets/img/altschool.jpg";
import techCabal from "../assets/img/techcabal_1.png";
import techcrunch from "../assets/img/techcrunch_1.png";
import techpoint from "../assets/img/techpoint-1.png";
import disrupt from "../assets/img/disrupt.png";
import { MdOutlineVerifiedUser } from "react-icons/md";

export const HeroSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <span className={classes.left_title}>
          Manage your Team's Task easily remotely
        </span>
        <span className={classes.left_button}>
          <Link to="/user">
            <button>Get Started</button>
          </Link>
        </span>
        <span className={classes.left_fetured}>
          <span>Features On</span>
          <span className={classes.featured_wrapper}>
            {[techCabal, techcrunch, techpoint, disrupt].map((img) => (
              <img src={img} alt="" />
            ))}
          </span>
        </span>
      </div>
      <div className={classes.right}>
        {" "}
        <div className={classes.image__container}>
          <span className={classes.engineering}>
            {" "}
            <MdOutlineVerifiedUser />
            Engineering
          </span>
          <span className={classes.data}>
            {" "}
            <MdOutlineVerifiedUser />
            School of Data
          </span>
          <span className={classes.product}>
            {" "}
            <MdOutlineVerifiedUser />
            School of Product
          </span>
          <img src={altschool} alt="" />
        </div>
      </div>
    </div>
  );
};
