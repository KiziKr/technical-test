import React from 'react';
import { Typography } from '@material-ui/core';
import UserCreate from '../components/users/UserCreate';

export const UserCreatePage = () => {
    return (
        <div id='user-create-page'>
            <Typography variant='h1'>Inscription</Typography>
            <UserCreate onSuccess={(data: any) => {
                alert(data)
            }} />
        </div>
    );
}