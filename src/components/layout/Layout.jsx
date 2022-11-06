import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/home" ? (
        <Navbar />
      ) : (
        <>
          <div>{!auth.login && <Navbar />}</div>
        </>
      )}

      <div>{children}</div>
    </div>
  );
};
