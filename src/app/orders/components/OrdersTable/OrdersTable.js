"use client";

import { Box } from "@mui/material";
import React, { useMemo } from "react";

import DataTable from "@/components/DataTable";
import LinkBase from "@/components/LinkBase";

const OrdersTable = ({ orders }) => {
  const columns = useMemo(() => {
    return [
      {
        id: "id",
        label: "ID",
        orderingKey: "Id",
        CellRenderer: ({ item }) => {
          return (
            <LinkBase
              href={`/orders/${item.id}`}
              LinkProps={{ style: { color: "#0999E2" } }}
            >
              {item.id}
            </LinkBase>
          );
        },
      },
      {
        id: "customer-id",
        label: "Customer ID",
        orderingKey: "CustomerId",
        CellRenderer: ({ item }) => {
          return (
            <LinkBase
              href={`/customers/${item.customerId}`}
              LinkProps={{ style: { color: "#0999E2" } }}
            >
              {item.customerId}
            </LinkBase>
          );
        },
      },

      {
        id: "order-date",
        label: "Order date",
        orderingKey: "OrderDate",
        CellRenderer: ({ item }) => {
          return <Box>{item.orderDate}</Box>;
        },
      },

      {
        id: "shipped-date",
        label: "Shipped Date",
        orderingKey: "ShippedDate",
        CellRenderer: ({ item }) => {
          return <Box>{item.shippedDate}</Box>;
        },
      },

      {
        id: "ship-name",
        label: "Ship name",
        orderingKey: "ShipName",
        CellRenderer: ({ item }) => {
          return <Box>{item.shipName}</Box>;
        },
      },

      {
        id: "ship-city",
        label: "Ship city",
        orderingKey: "ShipCity",
        CellRenderer: ({ item }) => {
          return <Box>{item.shipCity}</Box>;
        },
      },

      {
        id: "ship-country",
        label: "Ship country",
        orderingKey: "ShipCountry",
        CellRenderer: ({ item }) => {
          return <Box>{item.shipCountry}</Box>;
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
