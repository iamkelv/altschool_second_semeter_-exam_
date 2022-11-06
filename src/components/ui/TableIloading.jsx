import { ImSpinner } from "react-icons/im";
export const TableIsLoading = (size) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImSpinner size={100} />
    </div>
  );
};
