import { Alert, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react'
import { Navigate } from 'react-router';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const Login = ({login, setLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [invalidInput, setInvalidInput] = useState(false);

    if(login){
        return(<Navigate to="/"/>);
    }

    const onUsernameChange = (ev) => {
        setUsername(ev.target.value);
    }

    const onPasswordChange = (ev) => {
        setPassword(ev.target.value);
    }

    const onShowPasswordClicked = () => {
        setShowPassword(!showPassword);
    }

    const loginUser = () => {
        if(username === "foo" && password === "bar"){
            setLogin(true);
        }
        else{
            setInvalidInput(true);
            setUsername("");
            setPassword("");
        }
    }

  return (
    <main>
        <div>
            <Container sx={{width: {md: "40%", sm: "100%"}, display: "flex", flexDirection: "column"}}>
                <FormControl sx={{mt: "50px", width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="username-input">Username</InputLabel>
                    <OutlinedInput
                        id="username-input"
                        type="text"
                        value={username}
                        onChange={onUsernameChange}
                        label="Username"
                    />
                </FormControl>
                
                <FormControl sx={{my: "20px", width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <OutlinedInput
                        id="password-input"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={onPasswordChange}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={onShowPasswordClicked}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>

                <Button variant="outlined" color="error" onClick={loginUser}>Login</Button>
            </Container>
        </div>

        {invalidInput &&
            <Alert variant="filled" severity="error" sx={{position: "fixed", bottom: "0", width: "100%"}} onClick={() => {setInvalidInput(false)}}>
                Invalid Login Credentials
            </Alert>
        }
    </main>
  )
}
