import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Stack } from "@mui/material";
import Cards from "../cards/Cards";
import { useSelector } from "react-redux";

const Accueil = () => {
  const productState = useSelector((state) => state.products);
  return productState.status === "pending" ? (
    <LinearProgress sx={{ m: "auto", width: "100%" }} />
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh - 64px",
      }}
    >
      <Box>
        <Stack direction="row" spacing={1}></Stack>
        <Cards />
      </Box>
    </Box>
  );
};

export default Accueil;
