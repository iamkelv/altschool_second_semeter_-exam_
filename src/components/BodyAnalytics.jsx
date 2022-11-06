import classes from "./BodyAnalytics.module.css";
import { StatChart } from "./StatChart";
import { TrendChart } from "./TrendChart";
export const BodyAnalytics = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left__container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <div className={classes.calender}>
              <input type="date" value="2022-11-06" />
            </div>
          </div>
          <div
            style={{
              position: "relative",
              margin: "auto",
              height: "auto",
              maxHeight: "300px",
              overflow: "hidden",
            }}
          >
            {/* <StatChart /> */}
          </div>
        </div>
      </div>

      <div className={classes.right__container}>
        {" "}
        <TrendChart />
      </div>
    </div>
  );
};
