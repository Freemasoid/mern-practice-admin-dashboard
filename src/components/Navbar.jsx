import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppBar, Toolbar, useTheme, IconButton, InputBase } from "@mui/material";
import { FlexBox } from "./FlexBox.js";
import { setMode } from "../features/theme/themeSlice.js";

function Navbar() {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* left nav */}

        <FlexBox>
          <IconButton onClick={() => console.log("open/close sidebar")}>
            <MenuIcon />
          </IconButton>

          <FlexBox
            backgroundColor={theme.palette.background.alt}
            borderRadius="0.625rem"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBox>
        </FlexBox>

        {/* right nav */}

        <FlexBox gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "1.625rem" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "1.625rem" }} />
            )}
          </IconButton>

          <IconButton>
            <SettingsOutlined sx={{ fontSize: "1.625rem" }} />
          </IconButton>
        </FlexBox>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
