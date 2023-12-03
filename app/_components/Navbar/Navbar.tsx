"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

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
        <Button LinkComponent={Link} href="/favorites" color="inherit">
          Favorites
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
