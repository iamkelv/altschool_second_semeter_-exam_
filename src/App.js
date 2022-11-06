import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { Dashboard } from "./pages/admin/Dashboard";
import { AuthPage } from "./pages/AuthPage";
import { ContactUs } from "./pages/ContactUs";
import { GalleryPage } from "./pages/Gallery";
import { HomePage } from "./pages/HomePage";
import { SearchUsers } from "./pages/SearchUsers";
import { TestBound } from "./pages/TestBound";
import { UserDetailPage } from "./pages/UserDetailPage";

function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace={true} />}></Route>
        <Route path="home/*" element={<HomePage />}>
          <Route path="kelvin" element={<h1>Hello</h1>} />
        </Route>
        <Route path="/gallery/*" element={<GalleryPage />}>
          <Route path="image/:id" element={<UserDetailPage />} />
        </Route>
        <Route path="user/:id" element={<UserDetailPage />} />
        <Route path="service" element={<h1>Our Services</h1>} />
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

        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
