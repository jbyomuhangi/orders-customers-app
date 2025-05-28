"use client";

import convertMsJsonDate from "@/utils/convertMsJsonDate";
import { Box } from "@mui/material";
import React, { useMemo } from "react";

const DateCell = ({ msJsonDate }) => {
  const formattedDate = useMemo(() => {
    const parsedDate = convertMsJsonDate(msJsonDate);

    if (!parsedDate) return null;

    return new Intl.DateTimeFormat("en-GB").format(parsedDate);
  }, [msJsonDate]);

  if (!formattedDate) return null;

  return <Box>{formattedDate}</Box>;
};

export default DateCell;
