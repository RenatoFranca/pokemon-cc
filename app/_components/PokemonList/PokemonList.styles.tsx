import { Box, CircularProgress, Grid as MuiGrid } from "@mui/material";
import { styled } from "@mui/system";

export const Loading = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  justifyContent: "center",
  height: 100,
}));

export const ProgressIcon = styled(CircularProgress)(({ theme }) => ({
  alignSelf: "center",
}));

ProgressIcon.defaultProps = {
  "aria-label": "Loading",
};

export const Grid = styled(MuiGrid)``;

Grid.defaultProps = {
  container: true,
  spacing: {
    xs: 2,
    md: 4,
  },
};

export const GridItem = styled(MuiGrid)``;

GridItem.defaultProps = {
  item: true,
  xs: 6,
  md: 4,
  lg: 3,
};
