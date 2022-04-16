import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CardItem from "../cardItem/CardItem";

const Cards = () => {
  const products = [
    {
      name: "Wine - Saint Emilion",
      image: "http://dummyimage.com/119x100.png/dddddd/000000",
      price: 8043,
    },
    {
      name: "Sauce - Hoisin",
      image: "http://dummyimage.com/181x100.png/ff4444/ffffff",
      price: 4484,
    },
    {
      name: "Beer - Maudite",
      image: "http://dummyimage.com/210x100.png/5fa2dd/ffffff",
      price: 5719,
    },
    {
      name: "Flour - Whole Wheat",
      image: "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      price: 4121,
    },
    {
      name: "Chicken Giblets",
      image: "http://dummyimage.com/223x100.png/ff4444/ffffff",
      price: 132,
    },
    {
      name: "Wine - Dr. Pauly",
      image: "http://dummyimage.com/173x100.png/cc0000/ffffff",
      price: 6403,
    },
    {
      name: "Mint - Fresh",
      image: "http://dummyimage.com/163x100.png/cc0000/ffffff",
      price: 7704,
    },
    {
      name: "Shiro Miso",
      image: "http://dummyimage.com/183x100.png/dddddd/000000",
      price: 6396,
    },
    {
      name: "Lobster - Cooked",
      image: "http://dummyimage.com/154x100.png/5fa2dd/ffffff",
      price: 3200,
    },
  ];
  return (
    <Grid
      container
      sx={{ width: "70%", mx: "auto" }}
      columnSpacing={8}
      rowSpacing={4}
    >
      {products.map((product) => (
        <Grid item xs={3}>
          <CardItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
