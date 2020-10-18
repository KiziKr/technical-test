import React from 'react';
import UserList from '../components/users/UserList';
import { Typography } from '@material-ui/core';

export const UserListPage = () => {
    return (
        <div id='user-list-page'>
            <Typography variant='h1'>Utilisateurs</Typography>
            <UserList />
        </div>
    );
};