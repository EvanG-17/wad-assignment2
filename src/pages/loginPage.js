import React, { useContext, useState } from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const LoginPage = () => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };

    let location = useLocation();
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
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
                    Login
                </Typography>
                <TextField
                    id="username"
                    label="Username"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    style={{ backgroundColor: "red", marginTop: "10px" }}
                    onClick={login}
                >
                    Log in
                </Button>
                <Typography style={{ marginTop: "10px" }}>
                    Not Registered? <Link to="/signup">Sign Up!</Link>
                </Typography>
            </Paper>
        </Box>
    );
};




export default LoginPage;





