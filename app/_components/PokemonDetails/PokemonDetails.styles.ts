import { Box, Typography, styled } from "@mui/material";
import NextImage from "next/image";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

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
