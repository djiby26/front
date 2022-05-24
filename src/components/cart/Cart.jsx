import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import React, { useEffect } from "react";
import {
  Button,
  CardMedia,
  createTheme,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../features/slices/cart/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart);

  // useEffect(() => {
  //   try {
  //     if (currentUser) {
  //     }
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // });

  function createData(id, image, article, quantity, price, total) {
    return { id, image, article, quantity, price, total };
  }

  const dispatch = useDispatch();

  const rows = cart.products.map((product) =>
    createData(
      product._id,
      product.image,
      product.title,
      product.quantite,
      product.price,
      product.quantite * product.price
    )
  );

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

  const navigate = useNavigate();

  const handleCheckout = () => {
    currentUser ? navigate("/order", { state: { cart } }) : navigate("/login");
  };

  return (
    <Box sx={{ px: 10 }}>
      {cart.products.length === 0 ? (
        <Typography variant="h4" sx={{ mt: 5 }} textAlign="center">
          Vous n'avez aucun produit dans votre panier.
        </Typography>
      ) : (
        <>
          <Alert sx={{ width: "70%", margin: "auto" }} severity="info">
            Vous avez {cart.quantiteProd} produits dans votre panier.
          </Alert>
          <Box
            sx={{
              mx: "auto",
              mt: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TableContainer sx={{ flex: "1 1", mr: 2 }} component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Image</TableCell>
                    <TableCell align="center">Article</TableCell>
                    <TableCell align="center">Quantite</TableCell>
                    <TableCell align="center">Prix Unitaire</TableCell>
                    <TableCell align="center">Total</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <CardMedia
                          component="img"
                          src={row.image}
                          sx={{ width: "50px", height: "40px" }}
                        />
                      </TableCell>
                      <TableCell align="center">{row.article}</TableCell>
                      <TableCell align="center">{row.quantity}</TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">{row.total}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          onClick={() =>
                            dispatch(
                              deleteProduct({
                                id: row.id,
                                quantite: row.quantity,
                                price: row.price,
                              })
                            )
                          }
                        >
                          <DeleteIcon sx={{ color: "#54e849" }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ flex: "1 1", ml: 2 }}>
              <Paper sx={{ px: 4, mb: "10px", height: "2rem" }}>
                <Typography variant="h5">Commande</Typography>
              </Paper>
              <Paper sx={{ px: 4 }}>
                <Stack
                  sx={{ mb: 4 }}
                  direction="row"
                  justifyContent="space-between"
                >
                  <Typography variant="h6">Total HT</Typography>
                  <Typography>{cart.total} FCFA</Typography>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h6">Montant de la livraison</Typography>
                  <Typography>2000 FCFA</Typography>
                </Stack>

                <Stack></Stack>
              </Paper>
            </Box>
          </Box>
          <ThemeProvider theme={theme}>
            <Box sx={{ my: "3rem", display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleCheckout}
                sx={{ width: 250, height: "3.5rem" }}
                color="dark"
                variant="contained"
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
                  Valider la commande
                </Typography>
              </Button>
            </Box>
          </ThemeProvider>
        </>
      )}
    </Box>
  );
};

export default Cart;
