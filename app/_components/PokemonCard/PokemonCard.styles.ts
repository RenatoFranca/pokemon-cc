"use client";

import { Box, Typography, TypographyProps, styled } from "@mui/material";
import Link from "next/link";

export const CardLink = styled(Link)`
  text-decoration: none;
`;
CardLink.defaultProps = {
  passHref: true,
};

export const CardImage = styled(Box)`
  justify-content: center;
  display: flex;
`;

export const Name = styled(Typography)<TypographyProps>`
  text-align: center;
`;
Name.defaultProps = {
  component: "div",
  variant: "h5",
};
