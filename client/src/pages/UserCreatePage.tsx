import React from 'react';
import { Typography, Link } from '@material-ui/core';
import UserCreate from '../components/users/UserCreate';
import { Link as RouterLink } from 'react-router-dom';

export const UserCreatePage = () => {
    return (
        <div id='user-create-page'>
            <Link component={RouterLink} to='/user'>
                Retour
            </Link>
            <Typography variant='h1'>Inscription</Typography>
            <UserCreate />
        </div>
    );
}