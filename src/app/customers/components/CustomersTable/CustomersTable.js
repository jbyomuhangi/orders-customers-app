"use client";

import { Box } from "@mui/material";
import React, { useMemo } from "react";

import DataTable from "@/components/DataTable";
import LinkBase from "@/components/LinkBase";

const CustomersTable = ({ customers }) => {
  const columns = useMemo(() => {
    return [
      {
        id: "id",
        label: "ID",
        orderingKey: "Id",
        CellRenderer: ({ item }) => {
          return (
            <LinkBase
              href={`/customers/${item.id}`}
              LinkProps={{ style: { color: "#0999E2" } }}
            >
              {item.id}
            </LinkBase>
          );
        },
      },
      {
        id: "company-name",
        label: "Company Name",
        orderingKey: "CompanyName",
        CellRenderer: ({ item }) => {
          return <Box>{item.companyName}</Box>;
        },
      },
      {
        id: "contact-name",
        label: "Contact Name",
        orderingKey: "ContactName",
        CellRenderer: ({ item }) => {
          return <Box>{item.contactName}</Box>;
        },
      },

      {
        id: "city",
        label: "City",
        orderingKey: "City",
        CellRenderer: ({ item }) => {
          return <Box>{item.city}</Box>;
        },
      },
      {
        id: "phone",
        label: "Phone",
        orderingKey: "Phone",
        CellRenderer: ({ item }) => {
          return <Box>{item.phone}</Box>;
        },
      },

      {
        id: "country",
        label: "Country",
        orderingKey: "Country",
        CellRenderer: ({ item }) => {
          return <Box>{item.country}</Box>;
        },
      },
    ];
  }, []);

  return (
    <Box>
      <DataTable columns={columns} data={customers} />
    </Box>
  );
};

export default CustomersTable;
