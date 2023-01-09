import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { Box, Typography } from "@mui/material";
import { blue, deepOrange, red } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

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

  const generalData = [
    {
      id: 0,
      icon: "",
      title: "Item Sales",
      precent: "33%",
      total: "4.710",
    },
    {
      id: 1,
      icon: "",
      title: "Item Sales",
      precent: "33%",
      total: "4.710",
    },
    {
      id: 2,
      icon: "",
      title: "Item Sales",
      precent: "33%",
      total: "4.710",
    },
    {
      id: 3,
      icon: "",
      title: "Item Sales",
      precent: "33%",
      total: "4.710",
    },
  ];
  return (
    <Box>
      <Box>
        <Box
          p={2}
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(4, 1fr)`,
            gap: 2,
          }}
        >
          {generalData.map((item) => {
            return (
              <Box
                sx={{
                  backgroundColor: "rgb(40 51 78)",
                  borderRadius: 2,
                  padding: 2,
                  cursor: "pointer",
                  transition: `all 0.4s`,
                  "&:hover": {
                    transform: `scale(1.1)`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FontAwesomeIcon icon={faBagShopping} />
                  <Box
                    sx={{
                      backgroundColor: "rgb(22 78 99)",
                      padding: `0 16px`,
                      borderRadius: 8,
                    }}
                  >
                    {item.precent}
                  </Box>
                </Box>
                <Box
                  sx={{
                    marginTop: 4,
                  }}
                >
                  <Typography>{item.total}</Typography>
                  <Typography>{item.title}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 2,
          paddingBottom: 2,
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgb(40 51 78)",
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
              display: "flex",
            }}
          >
            {social.map((item) => {
              return (
                <Box
                  sx={{
                    backgroundColor: "rgb(40 51 78)",
                    paddingTop: 4,
                    paddingBottom: 4,
                    borderRadius: 4,
                    marginLeft: 4,
                    width: 140,
                    height: 150,
                    textAlign: "center",
                    position: "relative",
                    boxShadow: `0px 2px 8px rgba(0,0,0,0.15)}`,
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
      
    </Box>
  );
};
export default Home;
