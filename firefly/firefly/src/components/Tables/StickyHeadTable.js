import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Icon from "@material-ui/core/Icon";
import { green } from "@material-ui/core/colors";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "email", minWidth: 100 },
  {
    id: "phone",
    label: "phone",
    minWidth: 100,
    align: "right"
  },
  {
    id: "lastPurchase",
    label: "Last Purchased",
    minWidth: 170,
    align: "right"
  },
  {
    id: "piecesBoughtYear",
    label: "Pieces Bought This Year",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "piecesBoughtTotal",
    label: "Pieces Bought Total",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "status",
    label: "status",
    minWidth: 100,
    align: "center",
    format: value => value.toLocaleString()
  }
];
const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

const StickyHeadTable = ({ Data }) => {
  const classes = useStyles();
  const rows = Data;
  console.log(rows);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
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
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value === true ||
                          value === false ||
                          column.id === "email" ? (
                            column.id === "email" ? (
                              <a href="mailto: {value}">{value}</a>
                            ) : value === true ? (
                              <Icon style={{ color: green[500] }}>
                                add_circle
                              </Icon>
                            ) : (
                              <Icon color="secondary">add_circle</Icon>
                            )
                          ) : (
                            value
                          )}
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
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StickyHeadTable;
