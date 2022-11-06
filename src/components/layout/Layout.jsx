import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <div>{!auth.login && <Navbar />}</div>
      <div>{children}</div>
    </div>
  );
};
