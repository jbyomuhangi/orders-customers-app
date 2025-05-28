"use client";

import Header from "@/app/customers/[customerId]/components/CustomerDetails/Header";
import DataTable from "@/components/DataTable";
import FlexBox from "@/components/FlexBox";
import { Box } from "@mui/system";
import { startCase } from "lodash";
import React, { useMemo } from "react";

const styles = {
  orderDetailsContainer: {
    gap: "20px",
  },

  orderInfoSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    padding: "10px 20px",
  },
};

const HeaderCell = ({ column }) => {
  return <Box>{column.label}</Box>;
};

const OrderDetails = ({ order, orderDetails }) => {
  const orderFields = useMemo(() => {
    return [
      "customerId",
      "employeeId",
      "orderDate",
      "requiredDate",
      "shippedDate",
      "shipVia",
      "freight",
      "shipName",
      "shipAddress",
      "shipCity",
      "shipPostalCode",
      "shipCountry",
    ].map((field) => {
      return {
        key: field,
        label: startCase(field),
      };
    });
  }, []);

  const orderDetailColumns = useMemo(() => {
    return [
      {
        id: "productId",
        label: "Product ID",
        HeaderRenderer: HeaderCell,
        CellRenderer: ({ item }) => {
          return <Box>{item.productId}</Box>;
        },
      },
      {
        id: "quantity",
        label: "Quantity",
        HeaderRenderer: HeaderCell,
        CellRenderer: ({ item }) => {
          return <Box>{item.quantity}</Box>;
        },
      },
      {
        id: "unitPrice",
        label: "Unit Price",
        HeaderRenderer: HeaderCell,
        CellRenderer: ({ item }) => {
          return <Box>{item.unitPrice}</Box>;
        },
      },
      {
        id: "discount",
        label: "Discount",
        HeaderRenderer: HeaderCell,
        CellRenderer: ({ item }) => {
          return <Box>{item.discount}</Box>;
        },
      },
    ];
  }, []);

  return (
    <FlexBox BoxProps={{ sx: styles.orderDetailsContainer }}>
      <FlexBox>
        <Header>Order Info</Header>

        <Box sx={styles.orderInfoSection}>
          {orderFields.map((field) => {
            return (
              <FlexBox key={field.key} BoxProps={{ sx: { gap: "5px" } }}>
                <Box sx={{ fontWeight: "bold" }}>{field.label}:</Box>

                <Box>{order[field.key]}</Box>
              </FlexBox>
            );
          })}
        </Box>
      </FlexBox>

      <FlexBox>
        <Header>Orders</Header>

        <DataTable
          columns={orderDetailColumns}
          data={orderDetails}
          tableRowDataKey="productId"
          isPaginationShown={false}
        />
      </FlexBox>
    </FlexBox>
  );
};

export default OrderDetails;
