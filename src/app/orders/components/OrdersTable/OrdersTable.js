"use client";

import { Box } from "@mui/material";
import React, { useMemo } from "react";

import DataTable from "@/components/DataTable";
import DateCell from "@/components/DataTable/Cells/DateCell";
import LinkBase from "@/components/LinkBase";

const OrdersTable = ({ orders, totalOrders }) => {
  const columns = useMemo(() => {
    return [
      {
        id: "id",
        label: "ID",
        orderingKey: "Id",
        CellRenderer: ({ item }) => {
          return (
            <LinkBase
              href={`/orders/${item.customerId}/${item.id}`}
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
          return <DateCell msJsonDate={item.orderDate} />;
        },
      },

      {
        id: "shipped-date",
        label: "Shipped Date",
        orderingKey: "ShippedDate",
        CellRenderer: ({ item }) => {
          return <DateCell msJsonDate={item.shippedDate} />;
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
      <DataTable
        columns={columns}
        data={orders}
        TablePaginationProps={{ count: totalOrders }}
      />
    </Box>
  );
};

export default OrdersTable;
