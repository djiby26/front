import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { MenuItem, Select } from "@mui/material";

const AddNewUser = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    // if (data.get("password") !== data.get("password2")) {
    //   toast.error("Passwords do not match");
    // } else {
    //   dispatch(
    //     register({
    //       username: data.get("username"),
    //       email: data.get("email"),
    //       password: data.get("password"),
    //     })
    //   );
    // }
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                fullWidth
                required
                id="category"
                // value={age}
                label="Category"
                name="category"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
                // autoComplete="new-password"
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
                // autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="stock"
                label="Stock diponible"
                type="number"
                id="stock"
                // autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="prix"
                label="Prix"
                type="number"
                id="prix"
                // autoComplete="new-password"
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

export default AddNewUser;
