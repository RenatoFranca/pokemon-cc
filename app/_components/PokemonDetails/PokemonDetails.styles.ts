import { Box, styled } from "@mui/material";
import NextImage from "next/image";

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
