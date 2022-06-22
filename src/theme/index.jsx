import { createTheme } from "@mui/material";
import { COLORS } from "../constants";

export const theme = createTheme({
  palette: {
    warning: {
      main: `${COLORS.merigold}`,
    },
  },
});
