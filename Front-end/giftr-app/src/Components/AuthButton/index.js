import React from 'react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import UserProfile from '../UserProfile';
import css from './auth.module.css';

function AuthButton({user, isLoading, isAuthenticated}){
    if (isAuthenticated){
        return (
            <div className={css.logout}>
                <LogoutButton></LogoutButton>
                <UserProfile user={user} isAuthenticated={isAuthenticated} isLoading={isLoading}></UserProfile>
            </div>
        )
    }
    return (
         <div className={css.login}>
            <LoginButton />
         </div>
    )
}

export default AuthButton;