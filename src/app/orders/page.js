import { Box } from "@mui/material";

import isInteger from "@/utils/validationUtils/isInteger";
import { redirect } from "next/navigation";
import OrdersTable from "./components/OrdersTable";

const Page = async ({ searchParams }) => {
  const { page, rowsPerPage, orderBy } = await searchParams;

  if (!isInteger(page) || !isInteger(rowsPerPage)) {
    redirect("/orders?page=0&rowsPerPage=10");
  }

  const skipValue = page * rowsPerPage;

  const res = await fetch(
    `https://uitestapi.occupass.com/api/QueryOrders?take=${rowsPerPage}&skip=${skipValue}${orderBy ? `&orderBy=${orderBy}` : ""}`
  );

  const data = await res.json();

  const { results } = data;

  return (
    <Box>
      <OrdersTable orders={results || []} />
    </Box>
  );
};

export default Page;
