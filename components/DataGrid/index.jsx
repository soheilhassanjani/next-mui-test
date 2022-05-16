import { useMemo, memo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { nanoid } from "nanoid";
import isFunction from "lodash.isfunction";
import Box from "@mui/material/Box";
import CustomScrollbar from "components/CustomScrollbar";

const DataGrid = ({
  rows,
  columns,
  containerProps,
  stickyHeader,
  size = "medium",
}) => {
  // columnsWithColumnID
  const columnsWithColumnID = useMemo(
    () => columns.map((row) => ({ columnID: nanoid(), ...row })),
    [columns]
  );
  // rowsWithRowID
  const rowsWithRowID = useMemo(
    () => rows.map((row) => ({ rowID: nanoid(), ...row })),
    [rows]
  );
  // return
  return (
    <Box component={CustomScrollbar} {...containerProps}>
      <Table size={size} stickyHeader={stickyHeader}>
        <TableHead>
          <TableRow>
            {columnsWithColumnID.map((column) => (
              <TableCell
                key={column.columnID}
                {...column.cellProps}
                sx={{
                  "&:first-of-child": { borderRadius: "4px 0 0 4px" },
                  "&:last-child": { borderRadius: "0 4px 4px 0" },
                  border: 0,
                  bgcolor: "background.over",
                  ...column?.cellProps?.sx,
                }}
              >
                {column.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsWithRowID.map((row) => (
            <TableRow
              hover
              key={row.rowID}
              sx={{ "& td": { borderColor: "background.default" } }}
            >
              {columnsWithColumnID.map((column) => (
                <TableCell
                  key={row.rowID + column.columnID}
                  {...column.cellProps}
                >
                  {column.valueGetter && isFunction(column.valueGetter)
                    ? column.valueGetter({ column, row, columns, rows })
                    : row[column.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default memo(DataGrid);
