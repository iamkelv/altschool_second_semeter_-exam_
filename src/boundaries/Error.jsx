import { Button } from "../components/ui/Button";
import server_down from "../assets/img/server_down.svg";
export const ErrorBound = ({ error }) => {
  const refreshHandler = () => window.location.reload();
  return (
    <>
      <div style={{ display: "flex", margin: "0 auto" }}>
        <img src={server_down} style={{ width: "300px" }} alt="" />
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>{error}</h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button onClick={refreshHandler}> Refresh </Button>
      </div>
    </>
  );
};
