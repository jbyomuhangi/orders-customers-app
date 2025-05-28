import React from "react";

const Page = async () => {
  const res = await fetch("https://uitestapi.occupass.com/api/QueryOrders");
  const data = await res.json();

  const { results } = data;

  return (
    <div>
      {results.map((order) => {
        return <div key={order.id}>{order.id}</div>;
      })}
    </div>
  );
};

export default Page;
