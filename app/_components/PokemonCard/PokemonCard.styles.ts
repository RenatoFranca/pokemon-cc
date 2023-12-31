"use client";

import {
  Card as MuiCard,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";
import FavoriteIcon from "../Favorite";

export const Effects = styled(motion.div)``;
Effects.defaultProps = {
  initial: {
    y: 10,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 1,
    delay: 0.1,
  },
  viewport: {
    once: true,
  },
};

export const CardLink = styled(Link)`
  text-decoration: none;
`;
CardLink.defaultProps = {
  passHref: true,
};

export const Card = styled(MuiCard)`
  position: relative;
`;

export const Anchor = styled("span")`
  position: absolute;
  top: -90px;
`;

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

export const Favorite = styled(FavoriteIcon)(({ theme }) => ({
  position: "absolute",
  left: 0,
  padding: theme.spacing(1),
}));

// Using MUI's theme spacing to add padding
export const PokedexNumber = styled(Typography)(({ theme }) => ({
  position: "absolute",
  right: 0,
  padding: theme.spacing(1),
  fontSize: "0.8rem",
}));

PokedexNumber.defaultProps = {
  color: "textSecondary",
  gutterBottom: true,
};
