// MUI styled flex-box as separate component for cleaner code

import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const FlexBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
