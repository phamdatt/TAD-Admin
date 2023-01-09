import { Box } from "@mui/material";
import { images } from "../../contants/images";
import "./style.css";

function UserInfo(props: { handleShowUserInfo: () => void }) {
  const { handleShowUserInfo } = props;
  return (
    <Box className="container">
      <img
        src={images.avatar}
        alt=""
        className="avatar"
        onClick={handleShowUserInfo}
      />
    </Box>
  );
}
export default UserInfo;
