import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import supabase from '../auth/supabase';
import { loginFailure, loginStart, loginSuccess } from '../redux/slices/authSlice';

const LoginButton = () => {


    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    });
    }

  return (
    <>    
        <Button variant="contained" color="primary" onClick={handleLogin}>
            Log In with Google
        </Button>
    </>

  );
};

export default LoginButton;



