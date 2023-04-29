import { Navigate } from "react-router-dom";
import { ComponentType, LazyExoticComponent, useContext } from "react";

import PATHS from "../../routes/paths";
import Context from "../../context/Context";

interface ProtectedRouteProps {
  Component: LazyExoticComponent<ComponentType>;
}

const ProtectedRoute = ({ Component }: ProtectedRouteProps) => {
  const { isLoggedIn } = useContext(Context);

  return isLoggedIn ? <Component /> : <Navigate to={PATHS.LOGIN} />;
};

export default ProtectedRoute;
