import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, ButtonBase } from "@mui/material";
import React, { useMemo, useState } from "react";

import useSearchParamsMap from "@/hooks/useSearchParamsMap";

const styles = {
  button: {
    width: "100%",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const HeaderCell = ({ column }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { params, handleUpdateSearchParams } = useSearchParamsMap();

  const { orderBy } = params;

  const { orderDirection, orderKey } = useMemo(() => {
    const direction = orderBy && orderBy[0] === "-" ? "desc" : "asc";
    const key = orderBy && orderBy[0] === "-" ? orderBy.slice(1) : orderBy;

    return { orderDirection: direction, orderKey: key };
  }, [orderBy]);

  const isOrderedColumn = orderKey === column.orderingKey;

  const handleClick = () => {
    const newOrderBy = (() => {
      if (!isOrderedColumn) return column.orderingKey;
      if (orderDirection === "asc") return `-${column.orderingKey}`;
      return null;
    })();

    handleUpdateSearchParams({ newParams: { orderBy: newOrderBy } });
  };

  const opacity = useMemo(() => {
    if (isOrderedColumn) return 1;
    if (isHovered) return 0.3;
    return 0;
  }, [isOrderedColumn, isHovered]);

  return (
    <ButtonBase
      disableRipple
      sx={styles.button}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box>{column.label}</Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity,
        }}
      >
        {(() => {
          if (!isOrderedColumn) {
            return <ArrowUpwardIcon sx={{ fontSize: "1rem" }} />;
          }

          if (orderDirection === "asc") {
            return <ArrowUpwardIcon sx={{ fontSize: "1rem" }} />;
          }

          return <ArrowDownwardIcon sx={{ fontSize: "1rem" }} />;
        })()}
      </Box>
    </ButtonBase>
  );
};

export default HeaderCell;
