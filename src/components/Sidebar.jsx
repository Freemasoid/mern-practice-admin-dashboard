/* eslint-disable react/prop-types */
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FlexBox } from "./FlexBox.js";
import profileImage from "../assets/profile.png";
import { navLinks } from "../../utils/navLinks.jsx";
import { ChevronLeft, ChevronRightOutlined, SettingsOutlined } from "@mui/icons-material";

function Sidebar({ user, drawerWidth, isSidebarOpen, setIsSidebarOpen, isMobile }) {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{ width: drawerWidth }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBox color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5">
                  <Typography variant="h4" fontWeight="bold">
                    CHEEKYTITLE
                  </Typography>
                </Box>

                {isMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!setIsSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBox>
            </Box>

            <List>
              {navLinks.map(({ title, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={title} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {title}
                    </Typography>
                  );
                }

                const titleLink = title.toLowerCase();

                return (
                  <ListItem key={title} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${titleLink}`);
                        setActive(titleLink);
                      }}
                      sx={{
                        backgroundColor:
                          active === titleLink
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === titleLink
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === titleLink
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>

                      <ListItemText primary={title}>
                        {active === titleLink && (
                          <ChevronRightOutlined sx={{ ml: "auto" }} />
                        )}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBox textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="2.5rem"
                width="2.5rem"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name ? user.name : "Username"}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation ? user.occupation : "Occupation"}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "1.625rem" }}
              />
            </FlexBox>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}
export default Sidebar;
