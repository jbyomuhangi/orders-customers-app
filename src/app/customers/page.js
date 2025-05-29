import { Box } from "@mui/material";
import { notFound, redirect } from "next/navigation";

import isInteger from "@/utils/validationUtils/isInteger";
import CustomersTable from "./components/CustomersTable";

const Page = async ({ searchParams }) => {
  const { page, rowsPerPage, orderBy } = await searchParams;

  if (!isInteger(page) || !isInteger(rowsPerPage)) {
    redirect("/customers?page=0&rowsPerPage=10");
  }

  let data;
  try {
    const skipValue = page * rowsPerPage;

    const res = await fetch(
      `https://uitestapi.occupass.com/api/QueryCustomers?include=total&take=${rowsPerPage}&skip=${skipValue}${orderBy ? `&orderBy=${orderBy}` : ""}`
    );

    data = await res.json();
  } catch (error) {
    console.error(error);
    notFound();
  }

  if (!data) notFound();

  const { results, total } = data;

  return (
    <Box sx={{ padding: "10px" }}>
      <CustomersTable customers={results || []} totalCustomers={total} />
    </Box>
  );
};

export default Page;
