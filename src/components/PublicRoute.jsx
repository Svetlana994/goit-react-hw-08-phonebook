import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLogIn } from "../redux/auth/auth-selectors";

function PublicRoute({ children, restricted = false, ...routeProps }) {
  const isLoggedIn = useSelector(getLogIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}

export default PublicRoute;
