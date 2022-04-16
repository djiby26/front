import { Box, Stack } from "@mui/material";
import Cards from "../cards/Cards";

const Accueil = () => {
  return (
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
