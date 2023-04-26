import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment } from "react";
import { Button } from "@mui/material";
import DeleteButton from "./Dialog";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomTableHead = ({ row }) => {
  return (
    <TableHead>
      <TableRow>
        {row.map((item, index) => (
          <Fragment key={index}>
            <StyledTableCell align={index === 0 ? "left" : "right"}>
              {item}
            </StyledTableCell>
          </Fragment>
        ))}
        <StyledTableCell align={"right"}>Edit</StyledTableCell>
        <StyledTableCell align={"right"}>Delete</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

const TableRowGenerator = ({ row, keys }) => {
  return (
    <>
      {keys.map((item, i) => (
        <StyledTableCell key={i} align={i === 0 ? "left" : "right"}>
          {row[item]}
        </StyledTableCell>
      ))}
    </>
  );
};

const CustomTableBody = ({
  rows,
  keys,
  editAction,
  tableName,
  deleteAction,
  disabled,
}) => {
  return (
    <TableBody>
      {rows.map((row, index) => (
        <StyledTableRow key={index}>
          <TableRowGenerator row={row} keys={keys} />
          <StyledTableCell align={"right"}>
            <Button
              variant="contained"
              color={index === disabled ? "success" : "primary"}
              onClick={() => editAction(index, index === disabled)}
            >
              {index === disabled ? "Cancel Edit" : "Edit"}
            </Button>
          </StyledTableCell>
          <StyledTableCell align={"right"}>
            <DeleteButton
              Pkey={tableName}
              value={row[keys[0]]}
              deleteAction={() => deleteAction(index)}
              disabled={index === disabled}
            />
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default function CustomizedTables({
  headRow,
  columnRow,
  keys,
  editAction,
  deleteAction,
  tableName,
  disabled,
}) {
  if (
    !Array.isArray(headRow) ||
    !Array.isArray(columnRow) ||
    !Array.isArray(keys)
  )
    return <></>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <CustomTableHead row={headRow} />
        <CustomTableBody
          rows={columnRow}
          keys={keys}
          editAction={editAction}
          deleteAction={deleteAction}
          tableName={tableName}
          disabled={disabled}
        />
      </Table>
    </TableContainer>
  );
}
