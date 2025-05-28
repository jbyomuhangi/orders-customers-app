"use client";

import React, { useMemo } from "react";

import DataTable from "@/components/DataTable";
import { Box } from "@mui/material";

const OrdersTable = ({ orders }) => {
  const columns = useMemo(() => {
    return [
      {
        id: "id",
        label: "ID",
        CellRenderer: ({ item }) => {
          return <div>{item.id}</div>;
        },
      },
      {
        id: "customer-id",
        label: "Customer ID",
        CellRenderer: ({ item }) => {
          return <div>{item.customerId}</div>;
        },
      },

      {
        id: "order-date",
        label: "Order date",
        CellRenderer: ({ item }) => {
          return <div>{item.orderDate}</div>;
        },
      },

      {
        id: "shipped-date",
        label: "Shipped Date",
        CellRenderer: ({ item }) => {
          return <div>{item.shippedDate}</div>;
        },
      },

      {
        id: "ship-name",
        label: "Ship name",
        CellRenderer: ({ item }) => {
          return <div>{item.shipName}</div>;
        },
      },

      {
        id: "ship-city",
        label: "Ship city",
        CellRenderer: ({ item }) => {
          return <div>{item.shipCity}</div>;
        },
      },

      {
        id: "ship-country",
        label: "Ship country",
        CellRenderer: ({ item }) => {
          return <div>{item.shipCountry}</div>;
        },
      },
    ];
  }, []);

  return (
    <Box>
      <DataTable columns={columns} data={orders} />
    </Box>
  );
};

export default OrdersTable;
