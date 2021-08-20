import { Switch } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "./redux/auth/auth-operations";
import { getIsFetchingCurrentUser } from "./redux/auth/auth-selectors";

import AppBar from "./components/AppBar/AppBar";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

import Skeleton from "@material-ui/lab/Skeleton";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Switch>
          <Suspense fallback={<Skeleton animation="wave" />}>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </>
    )
  );
}

export default App;
