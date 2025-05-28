"use client";

import { Box } from "@mui/material";
import React, { useMemo } from "react";

import DataTable from "@/components/DataTable";
import HeaderCell from "./Cells/HeaderCell";

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
        HeaderRenderer: HeaderCell,
      },
      {
        id: "customer-id",
        label: "Customer ID",
        orderingKey: "CustomerId",
        CellRenderer: ({ item }) => {
          return <div>{item.customerId}</div>;
        },
        HeaderRenderer: HeaderCell,
      },

      {
        id: "order-date",
        label: "Order date",
        orderingKey: "OrderDate",
        CellRenderer: ({ item }) => {
          return <div>{item.orderDate}</div>;
        },
        HeaderRenderer: HeaderCell,
      },

      {
        id: "shipped-date",
        label: "Shipped Date",
        orderingKey: "ShippedDate",
        CellRenderer: ({ item }) => {
          return <div>{item.shippedDate}</div>;
        },
        HeaderRenderer: HeaderCell,
      },

      {
        id: "ship-name",
        label: "Ship name",
        orderingKey: "ShipName",
        CellRenderer: ({ item }) => {
          return <div>{item.shipName}</div>;
        },
        HeaderRenderer: HeaderCell,
      },

      {
        id: "ship-city",
        label: "Ship city",
        orderingKey: "ShipCity",
        CellRenderer: ({ item }) => {
          return <div>{item.shipCity}</div>;
        },
        HeaderRenderer: HeaderCell,
      },

      {
        id: "ship-country",
        label: "Ship country",
        orderingKey: "ShipCountry",
        CellRenderer: ({ item }) => {
          return <div>{item.shipCountry}</div>;
        },
        HeaderRenderer: HeaderCell,
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
