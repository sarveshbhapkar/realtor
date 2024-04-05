import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
//import Spinner from "./Spinner";
export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <h3>loading</h3>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
