import FlexBox from "@/components/FlexBox";
import React from "react";

import { notFound } from "next/navigation";
import CustomerDetails from "./components/CustomerDetails";

const Page = async ({ params }) => {
  const { customerId } = await params;

  const res = await fetch(
    `https://uitestapi.occupass.com/api/GetCustomerDetails?id=${customerId}`
  );

  const data = await res.json();

  if (!data.customer) notFound();

  return (
    <FlexBox>
      <CustomerDetails customer={data.customer} orders={data.orders || []} />
    </FlexBox>
  );
};

export default Page;
