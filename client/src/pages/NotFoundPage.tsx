import React from 'react';
import { Typography } from '@material-ui/core';

export const NotFoundPage = () => {
    return (
        <div id='not-found-page'>
            <img src='/404.png' alt='not found page'/>
            <Typography variant='h1'>Page non trouvé</Typography>
        </div>
    );
}