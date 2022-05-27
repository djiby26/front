import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, Select } from "@mui/material";
import { addProduct } from "../../../features/slices/product/productService";

const AddProduct = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const [category, setCategory] = useState("");
  const { token } = currentUser;
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    dispatch(
      addProduct({
        product: {
          title: data.get("title"),
          description: data.get("description"),
          price: data.get("price"),
          category: data.get("category"),
          image: data.get("image"),
          stockQuantity: data.get("stockQuantity"),
        },
        token: token,
      })
    );
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                fullWidth
                required
                id="category"
                value={category}
                label="Category"
                name="category"
                onChange={handleCategoryChange}
              >
                <MenuItem value="fruit">Fruit</MenuItem>
                <MenuItem value="legume">Legume</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="description"
                label="Description"
                type="text"
                id="description"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="image"
                label="Image"
                type="text"
                id="image"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="stockQuantity"
                label="Stock diponible"
                type="number"
                id="stockQuantity"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="price"
                label="Prix"
                type="text"
                id="price"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, width: "20%" }}
          >
            Ajouter Produit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default AddProduct;
