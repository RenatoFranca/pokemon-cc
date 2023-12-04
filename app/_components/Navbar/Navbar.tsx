"use client";

import {
  AppBar,
  Badge,
  BadgeProps,
  Button,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    fontSize: 10,
    height: 14,
    fontWeight: 700,
    right: 10,
  },
}));

const Navbar = () => {
  return (
    <AppBar position="fixed" enableColorOnDark>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{ flexGrow: 1, textDecoration: "none" }}
          color="white"
        >
          Pokémon CC
        </Typography>
        <Button LinkComponent={Link} href="/generations" color="inherit">
          <StyledBadge
            badgeContent="beta"
            color="warning"
            overlap="rectangular"
            anchorOrigin={{
              horizontal: "right",
              vertical: "bottom",
            }}
            variant="standard"
          >
            Generations
          </StyledBadge>
        </Button>
        <Button LinkComponent={Link} href="/favorites" color="inherit">
          Favorites
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
