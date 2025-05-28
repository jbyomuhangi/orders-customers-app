import { Box } from "@mui/material";
import { redirect } from "next/navigation";

import isInteger from "@/utils/validationUtils/isInteger";
import OrdersTable from "./components/OrdersTable";

const Page = async ({ searchParams }) => {
  const { page, rowsPerPage, orderBy } = await searchParams;

  if (!isInteger(page) || !isInteger(rowsPerPage)) {
    redirect("/orders?page=0&rowsPerPage=10");
  }

  const skipValue = page * rowsPerPage;

  const res = await fetch(
    `https://uitestapi.occupass.com/api/QueryOrders?include=total&take=${rowsPerPage}&skip=${skipValue}${orderBy ? `&orderBy=${orderBy}` : ""}`
  );

  const data = await res.json();

  const { results, total } = data;

  return (
    <Box>
      <OrdersTable orders={results || []} totalOrders={total} />
    </Box>
  );
};

export default Page;
