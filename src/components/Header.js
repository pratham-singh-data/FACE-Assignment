import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import LogoIMG from "../assets/face_logo.png";

export const Header = ({ login, setLogin }) => {
  // logout button click handler
  const onLogoutClicked = () => {
    setLogin(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src={LogoIMG} alt="Focus Academy of Career Enchancment" />
        {/* login button only appears if the user is currently logged in */}
        {login && (
          <Button variant="outlined" color="error" onClick={onLogoutClicked}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
