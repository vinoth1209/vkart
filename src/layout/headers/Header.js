/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Badge } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../../context/ThemeContext";
import { NavLink, useLocation } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";

const pages = [
  { title: "Shop", path: "shop" },
  { title: "Men", path: "men" },
  { title: "Women", path: "women" },
  { title: "Kids", path: "kids" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const { theme, toggleTheme } = useTheme();
  const {cart} = useStateContext();
  const [cartCount, setCartCount] = React.useState(0);


  const location = useLocation()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleTheme = () => {
    toggleTheme();
    const isDarkTheme = theme === "light";
    const elements = document.querySelectorAll(
      ".header, .typography, .typography-sub, .shop-home, .shop-button, .shop-card , .shop-home-reverse, .header-selected"
    );

    // Toggle dark-theme className on each matched element
    elements.forEach((element) => {
      element.classList.toggle("dark-theme", isDarkTheme);

      // Remove dark-theme className if not dark
      if (!isDarkTheme) {
        element.classList.remove("dark-theme");
      }
    });
  };



  React.useEffect(()=>{
    let count = 0;
    cart?.map((item)=>{
      count += Number(item?.count) ;
    })
    setCartCount(count)
  },[cart])
  return (
    <AppBar position="sticky" className="header z-10">
      <Container>
        <Toolbar disableGutters>
          <img src={require("../../assets/logo.png")} width={60} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages?.map((page, idx) => (
                <NavLink to={page?.path} key={idx} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className="typography">
                    {page?.title}
                  </Typography>
                </NavLink>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages?.map((page, idx) => (
              <NavLink to={page?.path} key={idx}>
                <Typography
                  // onClick={handleCloseNavMenu}
                  sx={{ m: 2, display: "block",}}
                  className={location?.pathname === `/${page?.path}` ?"header-selected" : theme === 'dark' ? "typography dark-theme" : "typography"}
                >
                  {page?.title}
                </Typography>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }} className="flex gap-3 items-center">
            {theme === "dark" ? (
              <IconButton onClick={handleTheme}>
                <DarkModeIcon style={{ color: "white" }} />
              </IconButton>
            ) : (
              <IconButton onClick={handleTheme}>
                <LightModeIcon style={{ color: "dark" }} />
              </IconButton>
            )}

            <Button className="typography">Login</Button>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              className="typography"
            >
              <Badge badgeContent={cartCount} className="typography">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" className="typography">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default React.memo(Header);
