import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const ProtectedRoute = () => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext?.isAuthenticated;

  if(isAuthenticated) {
    return <Navigate to="/vipshop/package1" />
  } else {
    return <Navigate to="/login?redirect=vipshop/package1" />
  }
};

export default ProtectedRoute;
