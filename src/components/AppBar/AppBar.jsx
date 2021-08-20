import { useSelector } from "react-redux";
import { getLogIn } from "redux/auth/auth-selectors";

import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

function AppBar() {
  const isLoggedIn = useSelector(getLogIn);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#858f9a",
        padding: "10px",
      }}
    >
      <div>
        <Navigation />
      </div>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
}

export default AppBar;
