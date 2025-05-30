import NavBar from "@/components/NavBar";
import theme from "@/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Orders App",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <NextTopLoader />

        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Box sx={{ marginBottom: "10px" }}>
              <NavBar />
            </Box>

            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
