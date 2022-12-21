import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Switch, Typography } from "@mui/material";
import colors from "../../theme/colors";

const Settings = () => {
  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: colors.gray[300],
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingBottom: 1,
          }}
        >
          <FontAwesomeIcon icon={faMoon} size="xl" />
          <Typography
            sx={{
              marginLeft: 2,
              fontWeight: 400,
            }}
          >
            Change Mode
          </Typography>
          <Switch
            sx={{
              marginLeft: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Settings;
