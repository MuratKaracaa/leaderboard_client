import { lazy, useContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import PATHS from "./paths";

import ProtectedRoute from "../components/protected/ProtectedRoute";
import Loading from "../components/loading/Loading";

import Context from "../context/Context";

const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/login/Login"));

const Router = () => {
  const { isRedirectActionReady } = useContext(Context);
  return isRedirectActionReady ? (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.LOGIN} Component={Login} />
        <Route
          path={PATHS.HOME}
          element={<ProtectedRoute Component={Home} />}
        />
      </Routes>
    </BrowserRouter>
  ) : (
    <Loading />
  );
};

export default Router;
