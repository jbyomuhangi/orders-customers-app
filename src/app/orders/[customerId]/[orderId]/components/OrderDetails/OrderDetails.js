"use client";

import Header from "@/app/customers/[customerId]/components/CustomerDetails/Header";
import DataTable from "@/components/DataTable";
import DateCell from "@/components/DataTable/Cells/DateCell";
import FlexBox from "@/components/FlexBox";
import LinkBase from "@/components/LinkBase";
import { Box } from "@mui/system";
import { startCase } from "lodash";
import { useParams } from "next/navigation";
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
  const { customerId } = useParams();

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
      const result = {
        key: field,
        label: startCase(field),
        DataRenderer: ({ data }) => {
          return <Box>{data}</Box>;
        },
      };

      if (field === "customerId") {
        // eslint-disable-next-line react/display-name
        result.DataRenderer = ({ data }) => {
          return (
            <LinkBase
              href={`/customers/${customerId}`}
              LinkProps={{ style: { color: "#0999E2" } }}
            >
              {data}
            </LinkBase>
          );
        };
      }

      if (field.endsWith("Date")) {
        // eslint-disable-next-line react/display-name
        result.DataRenderer = ({ data }) => {
          return <DateCell msJsonDate={data} />;
        };
      }

      return result;
    });
  }, [customerId]);

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
            const { DataRenderer } = field;

            return (
              <FlexBox key={field.key} BoxProps={{ sx: { gap: "5px" } }}>
                <Box sx={{ fontWeight: "bold" }}>{field.label}:</Box>

                <DataRenderer data={order[field.key]} />
              </FlexBox>
            );
          })}
        </Box>
      </FlexBox>

      <FlexBox>
        <Header>Orders</Header>

        <Box sx={{ padding: "10px" }}>
          <DataTable
            columns={orderDetailColumns}
            data={orderDetails}
            tableRowDataKey="productId"
            isPaginationShown={false}
          />
        </Box>
      </FlexBox>
    </FlexBox>
  );
};

export default OrderDetails;
