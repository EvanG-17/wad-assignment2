// import React, { useContext, useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from '../contexts/authContext';
// import { Link } from "react-router-dom";


// //Gotten from lab work 
// const LoginPage = props => {
//     const context = useContext(AuthContext);

//     const [userName, setUserName] = useState("");
//     const [password, setPassword] = useState("");

//     const login = () => {
//         context.authenticate(userName, password);
//     };

//     let location = useLocation();

//     // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
//     const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

//     if (context.isAuthenticated === true) {
//         return <Navigate to={from} />;
//     }

//     return (
//         <>
//             <h2>Login page</h2>
//             <p>You must log in to view the protected pages </p>
//             <input id="username" placeholder="user name" onChange={e => {
//                 setUserName(e.target.value);
//             }}></input><br />
//             <input id="password" type="password" placeholder="password" onChange={e => {
//                 setPassword(e.target.value);
//             }}></input><br />
//             {/* Login web form  */}
//             <button onClick={login}>Log in</button>
//             <p>Not Registered?
//                 <Link to="/signup">Sign Up!</Link></p>
//         </>
//     );
// };

// export default LoginPage;

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
            height="100vh"
        >
            <Paper elevation={3} style={{ padding: "20px", width: "300px" }}>
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
                    colour="primary"
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



