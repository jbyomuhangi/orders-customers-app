"use client";

import DataTable from "@/components/DataTable";
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
        orderingKey: "Id",
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

        <DataTable
          columns={orderColumns}
          data={ordersData}
          isPaginationShown={false}
        />
      </FlexBox>
    </FlexBox>
  );
};

export default CustomerDetails;
