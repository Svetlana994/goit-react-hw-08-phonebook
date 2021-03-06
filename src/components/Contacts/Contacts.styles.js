import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    backgroundColor: theme.palette.background.paper,
    padding: "20px 10px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    color: "#262626",
  },
}));
