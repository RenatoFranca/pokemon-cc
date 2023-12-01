import { Box, Stack, Typography, styled } from "@mui/material";
import NextImage from "next/image";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MuiHeightIcon from "@mui/icons-material/Height";
import MuiScaleIcon from "@mui/icons-material/Scale";

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
}));

export const BackLink = styled(Link)(({ theme }) => ({
  color: "black",
  display: "flex",
  paddingRight: theme.spacing(2),
}));

export const BackIcon = styled(KeyboardBackspaceIcon)(() => ({
  alignSelf: "center",
}));

BackIcon.defaultProps = {
  fontSize: "large",
};

export const Name = styled(Typography)(() => ({
  textTransform: "capitalize",
}));

Name.defaultProps = {
  variant: "h4",
};

export const PokedexNumber = styled(Typography)(({ theme }) => ({
  position: "absolute",
  right: 0,
  padding: theme.spacing(1),
  fontSize: "1.5rem",
}));

PokedexNumber.defaultProps = {
  color: "text.secondary",
  gutterBottom: true,
};

export const Image = styled(NextImage)`
  object-fit: contain;
  height: auto;
  max-height: 200px;
  width: 100%;
`;

Image.defaultProps = {
  height: 200,
  width: 200,
};

export const NotFavorite = styled(StarBorderIcon)(({ theme }) => ({
  color: theme.palette.warning.light,
  alignSelf: "center",
  cursor: "pointer",
}));
NotFavorite.defaultProps = {
  fontSize: "large",
};

export const Favorite = styled(StarIcon)(({ theme }) => ({
  color: theme.palette.warning.light,
  alignSelf: "center",
  cursor: "pointer",
}));
Favorite.defaultProps = {
  fontSize: "large",
};

export const AbilityBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: `0 ${theme.spacing(2)}`,
}));

export const AbilityName = styled(Typography)(() => ({
  textTransform: "capitalize",
  fontSize: "0.8rem",
}));

AbilityName.defaultProps = {
  variant: "h6",
};

export const AbilityTitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  textAlign: "center",
  marginTop: theme.spacing(1),
  color: "text.secondary",
}));

AbilityTitle.defaultProps = {
  variant: "h6",
};

export const HeightBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderLeft: "solid 1px #dbd9d9",
  borderRight: "solid 1px #dbd9d9",
  padding: `0 ${theme.spacing(2)}`,
  flexDirection: "column",
}));

export const HeightName = styled(Typography)(() => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  fontSize: "0.8rem",
}));

HeightName.defaultProps = {
  variant: "h6",
};

export const HeightIcon = styled(MuiHeightIcon)``;

HeightIcon.defaultProps = {
  fontSize: "small",
};

export const HeightTitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  marginTop: theme.spacing(1),
  color: "text.secondary",
}));

HeightTitle.defaultProps = {
  variant: "h6",
};

export const WeightBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: `0 ${theme.spacing(2)}`,
  flexDirection: "column",
}));

export const WeightName = styled(Typography)(({ theme }) => ({
  flex: 1,
  gap: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  fontSize: "0.8rem",
}));

WeightName.defaultProps = {
  variant: "h6",
};

export const WeightIcon = styled(MuiScaleIcon)``;

WeightIcon.defaultProps = {
  fontSize: "small",
};

export const WeightTitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  marginTop: theme.spacing(1),
  color: "text.secondary",
}));

WeightTitle.defaultProps = {
  variant: "h6",
};

export const StatsStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(1),
  justifyContent: "center",
  marginTop: theme.spacing(4),
}));
