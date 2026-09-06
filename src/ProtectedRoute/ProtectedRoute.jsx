import { useContext } from "react";
import CurrentUserContex from "../hooks/contexts/CurrentUserContext";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children, anonymous = false }) {
  const location = useLocation();
  const from = location.state?.from || "/results";

  const { startCooking } = useContext(CurrentUserContex);
  if (anonymous && startCooking) {
    // ...then go back the the path you came from
    return <Navigate to={from} />;
  }

  // If you need to be authorize to visit this path but you aren't logged in yet
  if (!anonymous && !startCooking) {
    // ...then go to login page
    return <Navigate to="/" state={{ from: location }} />;
  }

  // if ok show the content
  return children;
}

export default ProtectedRoute;
