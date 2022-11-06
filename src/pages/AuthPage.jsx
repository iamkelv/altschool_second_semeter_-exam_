import classes from "./AuthPage.module.css";
import logo from "../assets/img/logo.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import welcome from "../assets/img/welcome.svg";
import { Link, Navigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Auth_API } from "../config/API";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/slices/auth-slice";

export const AuthPage = () => {
  const [loginSwap, setLoginSwap] = useState(false);
  const [login, setLogin] = useState(true);
  const [erro, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const auth = useSelector((state) => state.auth);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const fetchData = async () => {
      setIsLoading(true);
      let url = Auth_API.signup;
      if (loginSwap) {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            setIsLoading(false);
            if (res.ok) {
              if (auth.login) {
                alert("login succes");
                return;
              } else {
                localStorage.setItem("isLoggedIn", 1);
                dispatch(authActions.loginUser(true));
                // navigate("/admin");
                <Navigate to="/admin" replace={true} />;

                return res.json();
              }
            } else {
              return res.json().then((data) => {
                return setError("Authentication failed!");
              });
            }
          })
          .then((data) => {
            setToken(data.idToken);
            dispatch(authActions.loginUser(true));
            localStorage.setItem("isLoggedIn", "1");
            // navigate("/admin");
            <Navigate to="/admin" replace={true} />;
          })
          .catch((err) => {
            setError("Authentication failed!");
          });
      } else {
        url = Auth_API.signin;
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            setIsLoading(false);
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((data) => {
                return setError("Authentication failed!");
              });
            }
          })
          .then((data) => {
            setToken(data.idToken);
            localStorage.setItem("isLoggedIn", "1");
            <Navigate to="/admin" replace={true} />;
            dispatch(authActions.loginUser(true));
          })
          .catch((err) => {
            setError("Authentication failed!");
          });
      }
    };
    fetchData().finally(() => setIsLoading(false));
  };

  return (
    <div className={classes.container}>
      <div className={classes.left__container}>
        <div className={classes.logo__container}>
          <img src={logo} alt="" />
        </div>
        <div className={classes.body__container}>
          <div className={classes.body__title}>
            <span>Welcome Back</span>
          </div>
          {!login && (
            <>
              <span>
                <span style={{ color: "red " }}>Recover Password</span>
              </span>
              <form className={classes.form} onSubmit={submitHandler}>
                <span>
                  <input
                    type="email"
                    placeholder="Your Email"
                    ref={emailInputRef}
                    required
                  />
                </span>

                <button
                  className={classes.button}
                  onClick={() => setLogin((prev) => !prev)}
                >
                  {isLoading && (
                    <span className={classes.login_text}>Loading... </span>
                  )}
                  {!isLoading && (
                    <span className={classes.login_text}>
                      Recover Password{" "}
                    </span>
                  )}

                  <span>
                    <BsArrowRight />
                  </span>
                </button>
              </form>
            </>
          )}
          {login && (
            <>
              <div className={classes.body__signup__wrapper}>
                {!loginSwap && (
                  <span className={classes.google}>
                    <span>
                      <FcGoogle size={15} />
                    </span>

                    <span className={classes.with_google}>
                      Log in with Google
                    </span>
                  </span>
                )}
                {loginSwap && (
                  <span className={classes.google}>
                    <span>
                      <FcGoogle size={15} />
                    </span>{" "}
                    <span className={classes.signin_google}>
                      Sign in with Google
                    </span>
                  </span>
                )}

                <span className={classes.with_email}>
                  OR WITH YOUR EMAIL ADDRESS
                </span>
              </div>
              <div className={classes.form__container}>
                <form className={classes.form} onSubmit={submitHandler}>
                  <span>
                    <input
                      type="email"
                      placeholder="Your Email"
                      ref={emailInputRef}
                      required
                    />
                  </span>
                  <span>
                    <input
                      type="password"
                      placeholder="Your Password"
                      ref={passwordInputRef}
                      required
                    />
                  </span>
                  <span className={classes.keep_logged}>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          style={{ width: "auto", boxShadow: "none" }}
                        />
                        <span className={classes.keep__me}>
                          Keep me logged in
                        </span>
                      </span>
                    </span>
                    <span>
                      <Link
                        to=""
                        className={classes.forgot}
                        onClick={() => setLogin((prev) => !prev)}
                      >
                        {" "}
                        Forgot Password?
                      </Link>
                    </span>
                  </span>
                  <p style={{ color: "red " }}>
                    {!isLoading && erro && `${erro}`}
                  </p>
                  <button className={classes.button}>
                    {!isLoading && (
                      <span className={classes.login_text}>Log in </span>
                    )}
                    {isLoading && (
                      <span className={classes.login_text}>loading...</span>
                    )}
                    <span>
                      <BsArrowRight />
                    </span>
                  </button>
                  <span>
                    <hr />
                  </span>
                  {!loginSwap && (
                    <span className={classes.no_accout}>
                      {" "}
                      Don't have an account?{" "}
                      <Link onClick={() => setLoginSwap((prev) => !prev)}>
                        Sign up
                      </Link>
                    </span>
                  )}
                  {loginSwap && (
                    <span className={classes.no_accout}>
                      {" "}
                      Already have an account?{" "}
                      <Link onClick={() => setLoginSwap((prev) => !prev)}>
                        Login
                      </Link>
                    </span>
                  )}
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={classes.right__container}>
        <img src={welcome} alt="" />
      </div>
    </div>
  );
};
