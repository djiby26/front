import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import AddNewUser from "./pages/AddNewUser";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const [currentPage, SetCurrentPage] = useState(<Orders />);
  const drawerWidth = 240;
  const location = useLocation();
  const currentUser = useSelector((state) => state.auth.user);

  if (!currentUser.isAdmin) {
    return <h4>Pas autorise</h4>;
  }

  if (!location.pathname.includes("/admin")) {
    return;
  }

  const pages = [
    <Orders />,
    <Products />,
    <AddProduct />,
    <AddNewUser />,
    <Users />,
  ];

  const icons = [
    <PointOfSaleIcon color="action" />,
    <ListAltIcon color="action" />,
    <AddBoxIcon color="action" />,
    <PersonAddIcon color="action" />,
    <GroupIcon color="action" />,
  ];

  const handlePage = (index) => {
    SetCurrentPage(pages[index]);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["Orders", "Products", "Add Products", "Add new User", "Users"].map(
            (text, index) => {
              return (
                <ListItem
                  onClick={() => handlePage(index)}
                  key={text}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>{icons[index]}</ListItemIcon>
                    <ListItemText>{text}</ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            }
          )}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {currentPage}
      </Box>
    </Box>
  );
};

export default Admin;
