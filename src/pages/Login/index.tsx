import { Button, TextField, Typography } from "@mui/material";
import colors from "../../theme/colors";
import "./style.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <TextField
          size="small"
          placeholder="Email address"
          sx={{
            width: "100%",
            backgroundColor: colors.gray[100],
            "& fieldset": { border: "none" },
            borderRadius: 1,
            fontSize: "12px",
          }}
        />
        <TextField
          size="small"
          sx={{
            width: "100%",
            backgroundColor: colors.gray[100],
            "& fieldset": { border: "none" },
            marginTop: "12px",
            borderRadius: 1,
            fontSize: "12px",
          }}
          placeholder="Password"
        />
        <Button
          style={{ width: "100%", marginTop: "12px", marginBottom: "12px" }}
        >
          Sign In
        </Button>
        <Typography className="forgot-title">Forgot your passwords?</Typography>
      </div>
    </div>
  );
}
export default Login;
