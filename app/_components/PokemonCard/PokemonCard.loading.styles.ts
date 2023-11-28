"use client";

import { Card, Skeleton, styled } from "@mui/material";

export const SkeletonCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
}));

export const SkeletonPokedexNumber = styled(Skeleton)(() => ({
  width: 50,
  fontSize: "1rem",
  alignSelf: "end",
}));

SkeletonPokedexNumber.defaultProps = {
  variant: "text",
};

export const SkeletonPokemonImage = styled(Skeleton)(() => ({
  height: 265,
}));

SkeletonPokemonImage.defaultProps = {
  variant: "rounded",
};

export const SkeletonPokemonName = styled(Skeleton)(() => ({
  fontSize: "1.5rem",
}));

SkeletonPokemonImage.defaultProps = {
  variant: "text",
};
