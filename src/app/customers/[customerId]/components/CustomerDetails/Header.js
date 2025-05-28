import { Box } from "@mui/material";
import React from "react";

const styles = {
  header: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginBottom: "10px",
    backgroundColor: "#dfeafc",
    padding: "10px",
  },
};
const Header = ({ children }) => {
  return <Box sx={styles.header}>{children}</Box>;
};

export default Header;
