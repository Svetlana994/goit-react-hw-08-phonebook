import { NavLink } from "react-router-dom";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#3445c2",
  },
};

function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink to="/login" style={styles.link} activeStyle={styles.activeLink}>
        Логин
      </NavLink>
    </div>
  );
}

export default AuthNav;