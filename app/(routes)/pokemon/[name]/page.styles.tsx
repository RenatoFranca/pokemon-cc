import { Container, styled } from "@mui/material";

export const PageContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(10),
  display: "flex",
  justifyContent: "center",
}));
