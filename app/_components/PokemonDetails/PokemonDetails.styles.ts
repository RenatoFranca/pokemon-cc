import { Box, styled } from "@mui/material";
import NextImage from "next/image";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
}));

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
  cursor: "pointer",
}));

export const Favorite = styled(StarIcon)(({ theme }) => ({
  color: theme.palette.warning.light,
  cursor: "pointer",
}));
