import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Sidebar } from "../components";

function SharedLayout() {
  const isMobile = useMediaQuery("(max-width: 37.5rem)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box display={isMobile ? "block" : "flex"} width="100%" height="100%">
      <Sidebar
        isMobile={isMobile}
        drawerWidth="15.625rem"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <span>{`isMobile = ${isMobile}`}</span>
        <br />
        <span>{`Display property = ${isMobile ? "block" : "flex"}`}</span>
        <Outlet />
      </Box>
    </Box>
  );
}
export default SharedLayout;
