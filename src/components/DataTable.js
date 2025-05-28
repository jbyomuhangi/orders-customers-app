"use client";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useMemo } from "react";

import useSearchParamsMap from "@/hooks/useSearchParamsMap";

const DefaultHeaderRenderer = ({ column }) => {
  return <>{column.label}</>;
};

const DataTable = ({ columns, data, TablePaginationProps }) => {
  const { params, handleUpdateSearchParams } = useSearchParamsMap();

  const handleChangePage = (event, newPage) => {
    handleUpdateSearchParams({ newParams: { page: newPage } });
  };

  const handleChangeRowsPerPage = (event) => {
    handleUpdateSearchParams({
      newParams: { page: 0, rowsPerPage: event.target.value },
    });
  };

  const { page, rowsPerPage } = useMemo(() => {
    return {
      page: parseInt(params.page),
      rowsPerPage: parseInt(params.rowsPerPage),
    };
  }, [params]);

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                const { HeaderRenderer = DefaultHeaderRenderer } = column;

                return (
                  <TableCell key={column.id}>
                    <HeaderRenderer column={column} />
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((item) => {
              return (
                <TableRow key={item.id}>
                  {columns.map((column) => {
                    const { CellRenderer } = column;

                    return (
                      <TableCell key={column.id}>
                        {CellRenderer && <CellRenderer item={item} />}
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
        component="div"
        rowsPerPageOptions={[5, 10, 25]}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        {...TablePaginationProps}
      />
    </Box>
  );
};

export default DataTable;
