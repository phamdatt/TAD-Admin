import { Box } from "@mui/material";
import "./style.css";
import { Typography } from "@mui/material";

function UserInfo() {
  return (
    <Box className="container">
      <img
        src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/319554748_1610027039451698_396577152243886781_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JLq2GjhVpsAAX8KxPQD&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfD29fG8WsRboJfNLw4kVtORxX4SAqH7MiMFSDkpD5ZGTg&oe=63A4781E"
        alt=""
        className="avatar"
      />
      <Box className="user-info--title">
        <Typography className="hello-title">Hello</Typography>
        <Box className="user-info--name">
          <Typography>Phạm Tiến Đạt</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default UserInfo;
