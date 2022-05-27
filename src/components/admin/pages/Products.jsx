import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { Typography } from "@mui/material";
import { fetchProducts } from "../../../features/slices/product/productService";

const columns = [
  { id: "title", label: "Product", minWidth: 170 },
  { id: "price", label: "Prix", minWidth: 100 },
  { id: "category", label: "Categorie", minWidth: 100 },
  {
    id: "stockQuantity",
    label: "Stock",
    // minWidth: 170,
    align: "right",
  },
];

function createData(title, price, category, stockQuantity) {
  return { title, price, category, stockQuantity };
}

export default function StickyHeadTable() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { token } = user;

  // React.useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [user, dispatch]);

  const rows = products.map((product) =>
    createData(
      product.title,
      product.price,
      product.category,
      product.stockQuantity
    )
  );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        sx={{ ml: 2, mt: 2, fontWeight: "bold", color: "gray" }}
        variant="h6"
      >
        Liste des produits
      </Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
