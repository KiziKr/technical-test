import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Paper } from '@material-ui/core';
import { User } from '../../types/user';
import axios from '../../api';

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
    tableHead: {
        backgroundColor: theme.palette.action.hover,
    },
    tableRow: {
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        }
    },
}));

const UserList = () => {
    const [users, setUsers] = useState<User[]>();
    const classes = useStyles();

    useEffect(() => {
        (async function anyNameFunction() {
            const { data } = await axios.get('/user');

            if (data) {
                setUsers(data);
            }
        })();
    }, []);

    const toLocaleDateString = (date: string) => {
        return new Date(date).toLocaleDateString('fr', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align='right'>Date d'inscription</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.map((user, key) => (
                        <TableRow
                            className={classes.tableRow}
                            key={`user-list-${key}`}
                        >
                            <TableCell
                                component='th'
                                scope='row'
                            >
                                {user.email}
                            </TableCell>
                            <TableCell align='right'>{toLocaleDateString(user.createdAt)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserList;