import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import LogoIMG from "../assets/face_logo.png";

export const Header = ({login, setLogin}) => {
    const onLogoutClicked = () => {
        setLogin(false);
    }

  return (
    <AppBar position="static" sx={{backgroundColor: "#ffffff"}}>
        <Toolbar sx={{justifyContent: "space-between"}}>
            <img src={LogoIMG} alt="Focus Academy of Career Enchancment"/>
            {login && <Button variant="outlined" color="error" onClick={onLogoutClicked}>Logout</Button>}
        </Toolbar>
    </AppBar>
  )
}
