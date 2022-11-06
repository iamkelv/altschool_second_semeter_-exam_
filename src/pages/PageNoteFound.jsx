import page from "../assets/img/page_not_found.svg";
export const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        width: "100%",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <img
        src={page}
        alt=""
        style={{ width: "auto", maxWidth: "500px", margin: "0 auto" }}
      />{" "}
      <h1 style={{ margin: "0 auto" }}>Page Not Found</h1>
    </div>
  );
};
