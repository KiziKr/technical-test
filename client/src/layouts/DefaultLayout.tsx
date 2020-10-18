import React from 'react';
import { makeStyles, Backdrop, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        color: '#fff',
        textDecoration: 'none',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    content: {
        width: 1000,
        marginTop: 150,
    }
}));

export const DefaultLayout = ({
    children,
    ...other
}: React.HTMLAttributes<HTMLDivElement>) => {
    const classes = useStyles();

    return (
        <div id='default-layout'>
            <Backdrop
                className={classes.backdrop}
                style={{ backgroundImage: 'url(backdrop-default.jpg)' }}
                open={true}
            >
                <AppBar position='static'>
                    <Toolbar>
                        <Typography
                            component={Link}
                            to='/user'
                            variant='h6'
                            className={classes.title}
                        >
                            Test technique
                        </Typography>
                        <Button
                            component={Link}
                            to='/user/signup'
                            color='inherit'
                        >
                            Inscription
                        </Button>
                    </Toolbar>
                </AppBar>
                <div
                    className={classes.content}
                    {...other}
                >
                    {children}
                </div>
            </Backdrop>
        </div>
    );
};