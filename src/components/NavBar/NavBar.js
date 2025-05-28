"use client";

import FlexBox from "@/components/FlexBox";
import LinkBase from "@/components/LinkBase";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton";

const styles = {
  mavBarContainer: {
    flexDirection: "row",
    gap: "10px",
    padding: "10px",
    borderBottom: "1px solid #e0e0e0",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
  },
};

const NavBar = () => {
  const pathname = usePathname();

  return (
    <FlexBox BoxProps={{ sx: styles.mavBarContainer }}>
      <LinkBase href="/orders">
        <NavButton isSelected={pathname.startsWith("/orders")}>
          Orders
        </NavButton>
      </LinkBase>

      <LinkBase href="/customers">
        <NavButton isSelected={pathname.startsWith("/customers")}>
          Customers
        </NavButton>
      </LinkBase>
    </FlexBox>
  );
};

export default NavBar;
