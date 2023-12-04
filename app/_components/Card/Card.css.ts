import { style } from "@vanilla-extract/css";

export const image = style({
  objectFit: "contain",
  height: "auto",
  maxHeight: 200,
  width: "100%",
  paddingTop: 24,
});

export const pokedexNumber = style({
  position: "absolute",
  right: 0,
  padding: 8,
  fontSize: "0.8rem",
});

export const name = style({
  textAlign: "center",
  textTransform: "capitalize",
});

export const link = style({
  textDecoration: "none",
});
