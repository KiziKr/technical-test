import React from 'react';
import { makeStyles, Backdrop } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',

    },
    content: {
        width: 1000,
    }
}));


export const DefaultLayout = ({
    children,
    ...other
}: React.HTMLAttributes<HTMLDivElement>) => {
    const classes = useStyles();

    return (
        <Backdrop
            className={classes.backdrop}
            style={{ backgroundImage: 'url(backdrop.jpg)' }}
            open={true}
        >
            <div
                className={classes.content}
                {...other}
            >
                {children}
            </div>
        </Backdrop>
    );
};