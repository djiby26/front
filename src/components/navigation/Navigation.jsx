import { Box } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import LinkTab from "./LinkTab";
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tabs,
  Tooltip,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useState } from "react";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.27)" }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#21201E",
          }}
          variant="regular"
        >
          <Typography
            sx={{ fontFamily: "Vibur, cursive", fontWeight: "500" }}
            variant="h4"
            color="#54e849"
            component="div"
          >
            Golden Store
          </Typography>
          <Tabs
            indicatorColor="secondary"
            centered
            sx={{
              width: "30%",
            }}
            value={value}
            onChange={handleChange}
            // textColor="white"
            aria-label="navigation links"
          >
            <LinkTab value="home" href="/" label="Home" />
            <LinkTab
              sx={{ color: "white" }}
              value="category"
              href="/"
              label="Categories"
            />
            <LinkTab
              sx={{ color: "white" }}
              value="aboutUs"
              href="/"
              label="About Us"
            />
          </Tabs>
          <Stack direction="row" spacing={2}>
            <IconButton
              title="shopping cart"
              aria-label="success"
              color="inherit"
              sx={{ color: "white" }}
            >
              <Badge badgeContent={0} color="secondary">
                <ShoppingCartIcon fontSize="medium" />
              </Badge>
            </IconButton>

            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                color="inherit"
                aria-label="menu"
                sx={{ color: "white" }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
          </Stack>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> Sign-in
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
  // return (
  //   <div className="nav-bar">
  //     <div className="nav-logo">
  //       <a href="/">Golden Fruits</a>
  //     </div>
  //     <div className="nav-links">
  //       <Link className="nav-link" to="/">
  //         Accueil
  //       </Link>
  //       <Link className="nav-link" to="/shop">
  //         Boutique
  //       </Link>
  //       <Link className="nav-link" to="/discover">
  //         Découverte
  //       </Link>
  //     </div>
  //     <div className="login-register">
  //       <button>Login</button>
  //       <button>Register</button>
  //     </div>
  //   </div>
  // );
};

export default Navigation;
