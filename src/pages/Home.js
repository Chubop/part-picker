import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LoginButton from '../auth/LoginButton';
import { selectUser } from '../redux/slices/authSlice';
import supabase from '../auth/supabase';
import PartGrid from '../components/part-grid/PartGrid';

// if unauthorized, render SignIn.js page
// if authorized, render Build.js

export default function Home(){

    const [session, setSession] = useState(null);

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])

    return (
        <div>
          {session ? (
            <>
              <p>Welcome, {session.user.email}.</p>
              <PartGrid/>
            </>
            ) : (
            <div>
            <p>Please sign in to view your profile.</p>
            <LoginButton/>
            </div>
          )}
        </div>
      );

}