import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardItem = ({ product }) => {
  const navigate = useNavigate();
  return (
    //Plan to use mui skeleton when fetching data
    <Card
      onClick={() => navigate("/product", { state: { product } })}
      sx={{
        Width: 70,
        Height: 140,
        cursor: "pointer",
        mt: "20px",
        p: 0,
        borderRadius: "10px",
        boxShadow: "  0px 0px 14px rgba(0, 0, 0, 0.076)",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "150px", height: "120px", margin: "auto" }}
        image={product.image}
      />
      <CardContent sx={{ p: "10px" }}>
        <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
          {product.title}
        </Typography>
        <Divider sx={{ mt: 1, mb: 1 }}></Divider>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "0.9rem", fontWeight: "normal" }}
          >
            {product.price} FCFA
          </Typography>
          <IconButton aria-label="add">
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardItem;
