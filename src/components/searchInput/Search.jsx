import React from "react";

import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();

  if (
    location.pathname.includes("login") ||
    location.pathname.includes("register") ||
    location.pathname.includes("order") ||
    location.pathname.includes("admin")
  ) {
    return;
  }
  return (
    <Paper
      component="form"
      sx={{
        border: "1px solid black",
        p: "6px 4px",
        display: "flex",
        alignItems: "center",
        width: 600,
        mt: 5,
        mb: 4,
        mx: "auto",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Chercher un produit"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
