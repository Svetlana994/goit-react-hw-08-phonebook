import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "redux/auth/auth-selectors";
import authOperations from "redux/auth/auth-operations";

import Button from "@material-ui/core/Button";

function UserMenu() {
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();

  return (
    <div style={{ padding: "10px" }}>
      <span style={{ marginRight: "30px", fontSize: "16px" }}>
        Добро пожаловать, {userName}
      </span>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </Button>
    </div>
  );
}

export default UserMenu;
