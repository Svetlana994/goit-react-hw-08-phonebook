import styles from "@emotion/styled/macro";
import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const WrapperForm = styles.div`
  width: 400px;
  height: 170px;
  margin: 0 100px;
  padding: 50px;
  box-shadow: 0px 0px 5px 1px #fff;
`;

export const CssTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    backgroundColor: "transparent",
    color: "#fff",
  },
});
