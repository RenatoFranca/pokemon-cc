"use client";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" enableColorOnDark>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{ flexGrow: 1, textDecoration: "none" }}
            color="white"
          >
            Pokemon CC
          </Typography>
          {/* @TODO */}
          {/* <Button LinkComponent={Link} href="/favorites" color="inherit">
            Favorites
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
