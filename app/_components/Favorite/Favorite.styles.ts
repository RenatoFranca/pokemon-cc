import { styled } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export const EmptyStar = styled(StarBorderIcon)(({ theme }) => ({
  color: theme.palette.warning.light,
  alignSelf: "center",
  cursor: "pointer",
}));
EmptyStar.defaultProps = {
  fontSize: "large",
};

export const FullStar = styled(StarIcon)(({ theme }) => ({
  color: theme.palette.warning.light,
  alignSelf: "center",
  cursor: "pointer",
}));
FullStar.defaultProps = {
  fontSize: "large",
};
