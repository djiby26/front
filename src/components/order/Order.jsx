import { Box, Button, Link, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";

const Order = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const { token } = currentUser;

  // const cart = useSelector((state) => state.cart);
  const { state } = useLocation();
  const { cart } = state;
  const [addResponse, setAddResponse] = useState(null);
  const apiUrl = "http://localhost:3001/api/order/";
  const navigate = useNavigate();

  useEffect(() => {
    const addOrder = async () => {
      try {
        const response = await axios.post(
          apiUrl,
          {
            userId: currentUser.userId,
            products: cart.products.map((item) => ({
              productId: item._id,
              productName: item.title,
              price: item.price,
              quantite: item.quantite,
            })),
            orderAmount: cart.total,
            address: "Dakar",
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (!response) {
          throw new Error("Error when adding order");
        }
        setAddResponse(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    addOrder();
  }, [cart]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {addResponse ? (
        <>
          <Typography variant="h4">
            Votre commande a été enregistrée !👌.
          </Typography>
          <Button
            sx={{ mt: 4, p: 2 }}
            variant="contained"

            // onClick={() => navigate("/")}
          >
            <Link href="/" color="white">
              Retourner a l'accueil
            </Link>
          </Button>
        </>
      ) : (
        <Spinner />
      )}
    </Box>
  );
};

export default Order;
