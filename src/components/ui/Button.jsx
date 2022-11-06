export const Button = ({ children, onClick }) => {
  return (
    <button
      style={{
        display: "flex",
        padding: "0.5rem 1rem",
        border: "1px solid gray",
        borderRadius: "5px",
        color: "gray",
        cursor: "pointer",
        fontWeight: "bolder",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
