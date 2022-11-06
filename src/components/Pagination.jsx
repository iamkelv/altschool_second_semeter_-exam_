import { Button } from "./ui/Button";
import classes from "./Pagination.module.css";
export const Pagination = ({
  onClick,
  totalUsers,
  usersPerPage,
  paginated,
  isLoading,
  error,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && !error && (
        <>
          <div className={classes.container}>
            <Button onClick={onClick.prev}>Prev</Button>
            {pageNumber.map((number) => (
              <Button key={number} onClick={() => paginated(number)}>
                {number}
              </Button>
            ))}
            <Button onClick={onClick.next}>Next</Button>
          </div>
        </>
      )}
    </>
  );
};
