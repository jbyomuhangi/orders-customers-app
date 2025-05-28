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
import { emptyObject } from "@/utils/noOpUtils";
import HeaderCell from "./Cells/HeaderCell";

const DataTable = ({
  columns,
  data,
  tableRowDataKey = "id",
  isPaginationShown = true,
  TablePaginationProps = emptyObject,
}) => {
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

  const hasData = data.length > 0;

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: "#dfeafc" }}>
            <TableRow>
              {columns.map((column) => {
                const { HeaderRenderer = HeaderCell } = column;

                return (
                  <TableCell key={column.id}>
                    <HeaderRenderer column={column} />
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          {hasData && (
            <TableBody>
              {data.map((item) => {
                return (
                  <TableRow
                    key={item[tableRowDataKey]}
                    sx={{
                      "&:nth-of-type(odd)": {
                        backgroundColor: "#f7f7f7",
                      },
                    }}
                  >
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
          )}

          {!hasData && (
            <TableBody>
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No data found
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>

      {isPaginationShown && hasData && (
        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          {...TablePaginationProps}
        />
      )}
    </Box>
  );
};

export default DataTable;
