import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../../contexts/authContext";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const context = useContext(AuthContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Popular", path: "/movies/popular" },
    { label: "Top Rated", path: "/movies/topRated" },
    { label: "Actors", path: "/actor" },

    ...(context.isAuthenticated
      ? [
          { label: `Welcome ${context.userName}`, isWelcomeMessage: true },
          { label: "Sign Out", path: "/signout"}
        ]
      : [{ label: "Login", path: "/login" }]),
  ];

  //Signout handling for user
  const handleMenuSelect = (pageURL) => {
    console.log("handleMenuSelect called");
    if (pageURL === "/signout") {
      context.signout();
      navigate("/", { replace: true });
    } else {
      console.log("Navigating to:", pageURL);
      navigate(pageURL, { replace: true });
    }
  };
    // { label: "Option 7", path: "/movies/popular" },

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            //Adding custom welcome message for indivdual user
            <>
              {menuOptions.map((opt) => (
                <React.Fragment key={opt.label}>
                  {opt.isWelcomeMessage ? (
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      {opt.label}
                    </Typography>
                  ) : (
                    !opt.isWelcomeMessage && (
                      <Button
                        color="inherit"
                        onClick={() => handleMenuSelect(opt.path)}
                      >
                        {opt.label}
                      </Button>
                    )
                  )}
                </React.Fragment>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
