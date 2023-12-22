import React, { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SignUpPage = () => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);

    const register = () => {
        let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegEx.test(password);

        if (validPassword && password === passwordAgain) {
            context.register(userName, password);
            setRegistered(true);
        }
    }

    if (registered === true) {
        return <Navigate to="/login" />;
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Paper elevation={3} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                width: "400px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                border: "2px solid black",
            }}>
                <Typography variant="h5" gutterBottom>
                    Sign Up
                </Typography>
                <TextField
                    value={userName}
                    id="username"
                    label="Username"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    value={password}
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    value={passwordAgain}
                    id="passwordAgain"
                    label="Password Again"
                    type="password"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setPasswordAgain(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: "20px", backgroundColor: "red" }}
                    onClick={register}
                >
                    Register
                </Button>
                <Typography style={{ marginTop: "10px" }}>
                    Already Registered? <Link to="/login">Log In!</Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default SignUpPage;
