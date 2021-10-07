import { useSelector } from "react-redux";
import { getLogIn } from "redux/auth/auth-selectors";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import UserMenu from "../UserMenu/UserMenu";
import { useStyles } from "./AppBar.styles";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function AppBarNew() {
  const classes = useStyles();
  const location = useLocation();
  const isLoggedIn = useSelector(getLogIn);

  const currentTab = () => {
    let path = location.pathname;
    if (path === "/") return 0;
    else if (path === "/login") return 1;
    else if (path === "/register") return 2;
  };
  const [value, setValue] = useState(currentTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" onChange={handleChange} value={value}>
          <Tab component={Link} to={"/"} label="Главная" />

          {isLoggedIn && (
            <Tab component={Link} to={"/contacts"} label="Контакты" />
          )}
          {!isLoggedIn && <Tab component={Link} to={"/login"} label="Логин" />}
          {!isLoggedIn && (
            <Tab component={Link} to={"/register"} label="Регистрация" />
          )}
          {isLoggedIn && <UserMenu />}
        </Tabs>
      </AppBar>
    </div>
  );
}

export default AppBarNew;
