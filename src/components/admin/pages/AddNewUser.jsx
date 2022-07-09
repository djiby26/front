import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import { createUser } from "../../../features/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddNewUser = () => {
  const [adminState, setAdminState] = useState(false);
  const { token } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleAdminChange = () => {
    setAdminState(!adminState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get("password") !== data.get("password2")) {
      toast.error("Passwords do not match");
    } else {
      dispatch(
        createUser({
          userData: {
            username: data.get("username"),
            email: data.get("email"),
            password: data.get("password"),
            isAdmin: adminState,
          },
          token,
        })
      );
    }
  };

  return (
    <Container component="main">
      <Typography
        sx={{ ml: 2, mt: 2, fontWeight: "bold", color: "gray" }}
        variant="h6"
      >
        Liste des commandes
      </Typography>
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
              <TextField
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="password2"
              />
            </Grid>
            <Grid item xs={6}>
              <FormGroup>
                <FormControlLabel
                  value={adminState}
                  onChange={handleAdminChange}
                  control={<Switch />}
                  label="Is Admin"
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, width: "20%" }}
          >
            Creer Utilisateur
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddNewUser;
