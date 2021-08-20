import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLogIn } from "../redux/auth/auth-selectors";

function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(getLogIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}

export default PrivateRoute;
