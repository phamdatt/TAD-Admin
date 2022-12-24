import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Typography } from "@mui/material";
import { blue, deepOrange, grey, teal } from "@mui/material/colors";
import "./style.css";
import { red } from "@mui/material/colors";

const Home = () => {
  const social = [
    {
      title: "Facebook",
      total: "2",
      icon: <FacebookSharpIcon className="icon" />,
      color: blue[300],
    },
    {
      title: "Intagrams",
      total: "2",
      icon: <InstagramIcon className="icon" />,
      color: deepOrange[200],
    },
    {
      title: "Youtube",
      total: "2",
      icon: <PlayArrowOutlinedIcon className="icon" />,
      color: red[200],
    },
  ];
  return (
    <Box
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2,
        paddingBottom: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: teal[100],
          borderRadius: 4,
          display: "flex",
          padding: 4,     
        }}
      >
        <Box>
          <Typography component="h6" variant="h6">
            Chanels
          </Typography>
          <Typography>Total Orders From Socials</Typography>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex"
          }}
        >
          {social.map((item) => {
            return (
              <Box
                sx={{
                  backgroundColor: "white",
                  paddingTop: 4,
                  paddingBottom: 4,
                  borderRadius: 4,
                  marginLeft: 4,
                  width: 140,
                  height: 150,
                  textAlign: "center",
                  position: "relative",
                  boxShadow: `0 1px 5px ${grey[500]}`,
                }}
              >
                <Typography>{item.title}</Typography>
                <Typography>{item.total}</Typography>
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    left: "50%",
                    transform: `translate(-50%)`,
                    width: 40,
                    height: 40,
                    backgroundColor: `${item.color}`,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
