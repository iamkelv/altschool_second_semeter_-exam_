import React from "react";

import classes from "./BottomHero.module.css";
import { HomeUsers } from "./HomeUsers";
export const BottomHero = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>
        Desing & build by a Altschool, for Students
      </span>
      <span className={classes.dedcription}>
        <span>
          Altschool is number #1 School for those passionate about Technology,
        </span>
        <span>
          We're the most comprehensive School to help you grow your tech career
        </span>
      </span>
      <HomeUsers />
    </div>
  );
};
