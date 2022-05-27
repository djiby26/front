import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrders,
  setOrderState,
} from "../../../features/slices/order/orderSlice";
import { toast } from "react-toastify";
import { Typography } from "@mui/material";

const columns = [
  { id: "order", label: "# Order Id", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "address", label: "Delivery Address", minWidth: 100 },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
  },
  {
    id: "total",
    label: "Total",
    minWidth: 170,
    align: "right",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
  },
  // {
  //   id: "image",
  //   minWidth: 170,
  //   align: "right",
  //   renderCell: () => <img src="../../../assets/images/banane.jpg" />,
  // },
];

function createData(order, name, address, status, total, date) {
  return { order, name, address, status, total, date };
}

export default function StickyHeadTable() {
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { token } = user;

  React.useEffect(() => {
    if (user && user.isAdmin) {
      dispatch(getOrders(token));
    } else {
      toast.error("Connectez vous d'abord.");
    }
  }, [user, dispatch]);

  const rows = orders.map((order) =>
    createData(
      order._id,
      order.userId,
      order.address,
      order.status,
      order.orderAmount,
      order.createdAt
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
        Liste des commandes
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
