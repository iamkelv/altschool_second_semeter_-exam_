import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import { Dashboard } from "./pages/admin/Dashboard";
import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";
import { PageNotFound } from "./pages/PageNoteFound";
import { SearchUsers } from "./pages/SearchUsers";
import { TestBound } from "./pages/TestBound";
import { UserDetailPage } from "./pages/UserDetailPage";
import { uiSliceAction } from "./store/slices/ui-slice";
import { Helmet } from "react-helmet";
function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div
      className={classes.container}
      onClick={() => dispatch(uiSliceAction.menu(false))}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Altschool Exam</title>
        <meta
          name="description"
          content="Welcome to altschool Student Exam Let's invest in your Future. Learn highly sought after tech skills without hassle. A program designed to arm you with the skills and knowledge required to boldly launch your tech careeR"
        />
        <link rel="canonical" href="/home" />
        <meta
          name="keywords"
          content="Kelvin, Altschool, exam, google, Nkubuin"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace={true} />}></Route>
        <Route path="home/" element={<HomePage />} />
        <Route path="user/:id" element={<UserDetailPage />} />
        <Route path="/admin" element={<Dashboard />} />

        <Route path="search" element={<SearchUsers />} />
        <Route path="bound" element={<TestBound />} />
        {!auth.login && <Route path="auth" element={<AuthPage />} />}
        {auth.login && (
          <Route
            path="auth"
            element={<Navigate to="/admin" replace={true} />}
          />
        )}
        <Route path="test" element={<TestBound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
