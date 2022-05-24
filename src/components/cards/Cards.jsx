import React from "react";

import { Grid } from "@mui/material";
import CardItem from "../cardItem/CardItem";
import { useSelector } from "react-redux";

const Cards = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <Grid
      container
      wrap="wrap"
      sx={{ px: 2, mx: "auto", minHeight: "100vh" }}
      columnSpacing={8}
      rowSpacing={4}
    >
      {products.map((product) => (
        <Grid key={product._id} item>
          <CardItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
