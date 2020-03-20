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
import { Location } from "../../types";

interface Column {
  id: "country" | "confirmed" | "deaths" | "recovered";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "country", label: "Country", minWidth: 170 },
  { id: "confirmed", label: "Confirmed", minWidth: 100 },
  {
    id: "deaths",
    label: "Deaths",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString()
  },
  {
    id: "recovered",
    label: "Recovered",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString()
  }
];

interface Data {
  country: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

function createData(
  country: string,
  confirmed: number,
  deaths: number,
  recovered: number
): Data {
  return { country, confirmed, deaths, recovered };
}

const rows: any = [];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

interface Props {
  locations: Array<Location>;
}

export function AppTable(props: Props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  props.locations.map((loc: any) => {
    const row = createData(
      loc.id,
      loc.country,
      loc.latest.confirmed,
      loc.latest.deaths
    );

    rows.push(row);
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const renderRows = (rows: any) => {
    if (rows.length !== 0) {
      return rows.map((row: any) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.country}>
            {columns.map(column => {
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
      });
    } else {
      return null;
    }
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
          <TableBody>{renderRows(rows)}</TableBody>
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
}
