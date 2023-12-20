// import React, { useContext, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from '../contexts/authContext';


// //Gotten from lab work
// const SignUpPage = props => {
//   const context = useContext(AuthContext)
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordAgain, setPasswordAgain] = useState("");
//   const [registered, setRegistered] = useState(false);

//   const register = () => {
//     let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//     const validPassword = passwordRegEx.test(password);

//     if (validPassword && password === passwordAgain) {
//       context.register(userName, password);
//       setRegistered(true);
//     }
//   }

//   if (registered === true) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <>
//       <h2>SignUp page</h2>
//       <p>You must register a username and password to log in </p>
//       <input value={userName} placeholder="user name" onChange={e => {
//         setUserName(e.target.value);
//       }}></input><br />
//       <input value={password} type="password" placeholder="password" onChange={e => {
//         setPassword(e.target.value);
//       }}></input><br />
//       <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
//         setPasswordAgain(e.target.value);
//       }}></input><br />
//       {/* Login web form  */}
//       <button onClick={register}>Register</button>
//     </>
//   );
// };

// export default SignUpPage;

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
            height="100vh"
        >
            <Paper elevation={3} style={{ padding: "20px", width: "300px" }}>
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
                    style={{ marginTop: "20px" }}
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
