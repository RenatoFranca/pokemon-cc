"use client";

import { Box, Typography, TypographyProps, styled } from "@mui/material";
import NextImage from "next/image";
import Link from "next/link";

export const CardLink = styled(Link)`
  text-decoration: none;
`;
CardLink.defaultProps = {
  passHref: true,
};

// The ImageBox is used to center the image
export const ImageBox = styled(Box)`
  justify-content: center;
  display: flex;
`;

export const Image = styled(NextImage)`
  object-fit: contain;
  height: auto;
  maxheight: 200;
  width: 100%;
`;
Image.defaultProps = {
  height: 200,
  width: 200,
};

/* 
  The TypographyProps type is required because Typescript cannot infer 
  the type of the component prop:

  More info: https://github.com/mui/material-ui/issues/13921
*/
export const Name = styled(Typography)<TypographyProps>`
  text-align: center;
`;
Name.defaultProps = {
  component: "div",
  variant: "h5",
};
