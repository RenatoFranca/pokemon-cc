"use client";

import { Typography, TypographyProps, styled } from "@mui/material";
import NextImage from "next/image";
import Link from "next/link";

export const CardLink = styled(Link)`
  text-decoration: none;
`;
CardLink.defaultProps = {
  passHref: true,
};

export const Image = styled(NextImage)`
  object-fit: contain;
  height: auto;
  maxheight: 200;
  width: 100%;
  padding-top: 24px;
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
  text-transform: capitalize;
`;
Name.defaultProps = {
  component: "div",
  variant: "h5",
};

// Using MUI's theme spacing to add padding
export const PokedexNumber = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    position: "absolute",
    right: 0,
    padding: theme.spacing(1),
    fontSize: "0.8rem",
  })
);
