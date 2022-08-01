import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

// footer to show credits to the creator
export const Footer = () => {
  return (
    <AppBar
      sx={{
        display: { md: "flex", xs: "none" },
        position: "static",
        bottom: "0",
        backgroundColor: "#ffffff",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
          color: "#000000",
        }}
      >
        <Typography>
          Demo site by{" "}
          <a href="https://github.com/pratham-singh-data">Pratham Singh</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
