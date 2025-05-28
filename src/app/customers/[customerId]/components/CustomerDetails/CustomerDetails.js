"use client";

import DataTable from "@/components/DataTable";
import DateCell from "@/components/DataTable/Cells/DateCell";
import FlexBox from "@/components/FlexBox";
import LinkBase from "@/components/LinkBase";
import useSearchParamsMap from "@/hooks/useSearchParamsMap";
import { Box } from "@mui/material";
import { startCase } from "lodash";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";
import Header from "./Header";

const styles = {
  customerDetailsContainer: {
    gap: "20px",
  },

  contactInfoSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    padding: "10px 20px",
  },
};

const HeaderCell = ({ column }) => {
  return <Box>{column.label}</Box>;
};

const CustomerDetails = ({ customer, orders }) => {
  const { customerId } = useParams();

  const customerFields = useMemo(() => {
    return [
      "contactTitle",
      "contactName",
      "companyName",
      "address",
      "city",
      "postalCode",
      "country",
      "phone",
      "fax",
    ].map((field) => {
      return {
        key: field,
        label: startCase(field),
      };
    });
  }, []);

  const ordersData = useMemo(() => {
    return orders.map((order) => order.order);
  }, [orders]);

  const orderColumns = useMemo(() => {
    return [
      {
        id: "id",
        label: "ID",
        HeaderRenderer: HeaderCell,
        CellRenderer: ({ item }) => {
          return (
            <LinkBase
              href={`/orders/${customerId}/${item.id}`}
              LinkProps={{ style: { color: "#0999E2" } }}
            >
              {item.id}
            </LinkBase>
          );
        },
      },
      {
        id: "order-date",
        label: "Order date",
        HeaderRenderer: HeaderCell,
        CellRenderer: ({ item }) => {
          return <DateCell msJsonDate={item.orderDate} />;
        },
      },
      {
        id: "shipped-date",
        label: "Shipped Date",
        HeaderRenderer: HeaderCell,
        CellRenderer: ({ item }) => {
          return <DateCell msJsonDate={item.shippedDate} />;
        },
      },
      {
        id: "ship-name",
        label: "Ship name",
        HeaderRenderer: HeaderCell,
        CellRenderer: ({ item }) => {
          return <Box>{item.shipName}</Box>;
        },
      },
      {
        id: "ship-city",
        label: "Ship city",
        HeaderRenderer: HeaderCell,
        CellRenderer: ({ item }) => {
          return <Box>{item.shipCity}</Box>;
        },
      },
      {
        id: "ship-country",
        label: "Ship country",
        HeaderRenderer: HeaderCell,
        CellRenderer: ({ item }) => {
          return <Box>{item.shipCountry}</Box>;
        },
      },
    ];
  }, [customerId]);

  return (
    <FlexBox BoxProps={{ sx: styles.customerDetailsContainer }}>
      <FlexBox>
        <Header>Customer Info</Header>

        <Box sx={styles.contactInfoSection}>
          {customerFields.map((field) => {
            return (
              <FlexBox key={field.key} BoxProps={{ sx: { gap: "5px" } }}>
                <Box sx={{ fontWeight: "bold" }}>{field.label}:</Box>

                <Box>{customer[field.key]}</Box>
              </FlexBox>
            );
          })}
        </Box>
      </FlexBox>

      <FlexBox>
        <Header>Orders</Header>

        <Box sx={{ padding: "10px" }}>
          <DataTable
            columns={orderColumns}
            data={ordersData}
            isPaginationShown={false}
          />
        </Box>
      </FlexBox>
    </FlexBox>
  );
};

export default CustomerDetails;
