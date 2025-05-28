"use client";

import { Box } from "@mui/material";
import React, { useMemo } from "react";

import DataTable from "@/components/DataTable";

const OrdersTable = ({ orders }) => {
  const columns = useMemo(() => {
    return [
      {
        id: "id",
        label: "ID",
        orderingKey: "Id",
        CellRenderer: ({ item }) => {
          return <div>{item.id}</div>;
        },
      },
      {
        id: "customer-id",
        label: "Customer ID",
        orderingKey: "CustomerId",
        CellRenderer: ({ item }) => {
          return <div>{item.customerId}</div>;
        },
      },

      {
        id: "order-date",
        label: "Order date",
        orderingKey: "OrderDate",
        CellRenderer: ({ item }) => {
          return <div>{item.orderDate}</div>;
        },
      },

      {
        id: "shipped-date",
        label: "Shipped Date",
        orderingKey: "ShippedDate",
        CellRenderer: ({ item }) => {
          return <div>{item.shippedDate}</div>;
        },
      },

      {
        id: "ship-name",
        label: "Ship name",
        orderingKey: "ShipName",
        CellRenderer: ({ item }) => {
          return <div>{item.shipName}</div>;
        },
      },

      {
        id: "ship-city",
        label: "Ship city",
        orderingKey: "ShipCity",
        CellRenderer: ({ item }) => {
          return <div>{item.shipCity}</div>;
        },
      },

      {
        id: "ship-country",
        label: "Ship country",
        orderingKey: "ShipCountry",
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
