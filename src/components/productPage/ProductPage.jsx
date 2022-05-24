import {
  Box,
  Button,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
// import prodImg from "../../assets/images/banane.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/slices/cart/cartSlice";

const ProductPage = () => {
  const { state } = useLocation();
  const [quantite, setQuantite] = React.useState(1);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setQuantite(event.target.value);
  };

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      dark: {
        main: "#21201E",
      },
    },
  });

  return (
    <Box
      sx={{
        border: "solid 1px gray",
        display: "flex",
        justifyContent: "space-between",
        px: 7,
        py: 3,
        m: 7,
      }}
    >
      <Box component="img" sx={{ width: "40%" }} src={state.product.image} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          flex: "1",
          px: 4,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4">{state.product.title}</Typography>
          <Typography variant="h6">{state.product.price} FCFA / kg</Typography>
        </Stack>
        <Stack direction="column">
          <Typography sx={{ mb: 3 }} variant="h6">
            Description
          </Typography>
          <Typography variant="body1" textAlign="justify">
            {state.product.description}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ width: 250 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Quantite</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quantite}
                label="quantite"
                onChange={handleChange}
              >
                <MenuItem selected value={1}>
                  1 kilo
                </MenuItem>
                <MenuItem value={2}>2 kilos</MenuItem>
                <MenuItem value={3}>3 Kilos</MenuItem>
                <MenuItem value={4}>4 kilos</MenuItem>
                <MenuItem value={5}>5 kilos</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <ThemeProvider theme={theme}>
            <Button
              sx={{ width: 250, height: "3.5rem" }}
              color="dark"
              variant="contained"
              onClick={() =>
                dispatch(addProduct({ ...state.product, quantite }))
              }
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Ajouter au panier
                <AddShoppingCartIcon sx={{ ml: 1 }} />
              </Typography>
            </Button>
          </ThemeProvider>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductPage;
