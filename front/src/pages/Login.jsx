// src/pages/Login.jsx
import React from 'react';
import { useEffect, useState } from "react";

import {TextField} from '@mui/material';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    return (
        <div>
            <p>Login</p>
            <TextField
                label="Usuario"
                variant="outlined"
                fullWidth
                margin="normal"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            ></TextField>
            <TextField
                type='password'
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
            ></TextField>

        </div>
    );
}

export default Login;