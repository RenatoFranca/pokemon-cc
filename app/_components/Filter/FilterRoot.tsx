"use client";

import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

type FilterRootProps = {
  children: ReactNode;
};

export const FilterRoot = ({ children }: FilterRootProps) => {
  return (
    <Box
      paddingTop={12}
      paddingBottom={4}
      sx={{ backgroundColor: "background.paper" }}
    >
      <Container>{children}</Container>
    </Box>
  );
};
