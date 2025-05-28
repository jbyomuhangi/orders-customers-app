import React from "react";

import FlexBox from "@/components/FlexBox";
import { notFound } from "next/navigation";
import OrderDetails from "./components/OrderDetails/OrderDetails";

const Page = async ({ params }) => {
  const { customerId, orderId } = await params;

  const res = await fetch(
    `https://uitestapi.occupass.com/api/GetOrders?customerId=${customerId}`
  );

  const data = await res.json();
  const { results = [] } = data;

  const orderResult = results.find((result) => {
    return `${result.order.id}` === orderId;
  });

  if (!orderResult.order) notFound();

  return (
    <FlexBox>
      <OrderDetails
        order={orderResult.order}
        orderDetails={orderResult.orderDetails || []}
      />
    </FlexBox>
  );
};

export default Page;
