import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Paper } from '@material-ui/core';
import { User, UserSheet } from '../../types/user';
import axios from '../../api';
import UserModal from './UserModal';

const useStyles = makeStyles(theme => ({
    root: {
        height: 427,
    },
    table: {
        minWidth: 650,
    },
    tableHead: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    tableRow: {
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        color: '#fff',
    },
}));

const UserList = () => {
    const [users, setUsers] = useState<User[]>();
    const [userSelected, setUserSelected] = useState<User>();
    const [openModal, setOpenModal] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        (async function anyNameFunction() {
            const { data } = await axios.get('/user');

            if (data) {
                setUsers(data);
            }
        })();
    }, []);

    const handleUserSheet = async (index: number): Promise<void> => {
        if (users && users[index]) {
            const { data } = await axios.get(`/user/${users[index].id}`);

            if (data) {
                const newUsers = users;
                newUsers[index].userSheet = data;
                setUserSelected(newUsers[index]);
                setUsers(newUsers);
            }
        }
    }

    const toLocaleDateString = (date: string) => {
        return new Date(date).toLocaleDateString('fr', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    return (
        <TableContainer className={classes.root} component={Paper}>
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
                            onClick={() => {
                                setOpenModal(!openModal);
                                handleUserSheet(key);
                            }}
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
                    {userSelected && openModal &&
                        <UserModal
                            user={userSelected}
                            open={openModal}
                            onClose={handleClose}
                        />
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserList;