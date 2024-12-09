import React, { Suspense } from "react";
import { Spin } from "antd";
import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const { isAuthenticate } = useSelector((state) => state.rootReducer.auth);

  const LoginPage = React.lazy(() => import("./components/Login"));
  const NotFoundPage = React.lazy(() => import("./components/Notfound"));
  const MainLayout = React.lazy(() => import("./Page/MainStructure"));

  const isLogin = () => {
    return isAuthenticate
      ? isAuthenticate
      : localStorage.getItem("isAuthenticate") === "true";
  };

  const PrivateRoute = () => {
    return isLogin() ? <Outlet /> : <Navigate to="/login" />;
  };

  const PublicRoute = () => {
    return isLogin() ? <Navigate to="/" /> : <Outlet />;
  };

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Spin size="large" />
        </div>
      }
    >
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route exact path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<MainLayout />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
