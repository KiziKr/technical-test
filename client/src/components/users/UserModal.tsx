import React from 'react';
import { ModalProps, Modal, List, ListItemText, ListItem, makeStyles, Paper } from '@material-ui/core';
import { User } from '../../types/user';

interface UserModalProps extends Omit<ModalProps, 'children'> {
    user: User;
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#fff',
        padding: theme.spacing(2, 4, 3),
        maxWidth: 530,
        minHeight: 250,
        color: 'black !important'
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}));

const UserModal = ({
    user: {
        email,
        userSheet,
        createdAt
    }, ...other
}: UserModalProps) => {
    const classes = useStyles();

    const toLocaleDateString = (date: string) => {
        return new Date(date).toLocaleDateString('fr', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    const makeListItems = () => {
        const userInfos = [
            ['Prénom', userSheet?.firstName],
            ['Nom', userSheet?.lastName],
            ['Email', email],
            ['Déscription', userSheet?.description],
            ['Téléphone', userSheet?.phone],
            ['Date d\'inscription', toLocaleDateString(createdAt)],
        ];

        return (
            <List dense={false} className={classes.list}>
                {userInfos.map(userInfo =>
                    <ListItem style={{ width: '50%' }}>
                        <ListItemText
                            primary={userInfo[0]}
                            secondary={userInfo[1]}
                        />
                    </ListItem>
                )}
            </List>
        );
    }

    return (
        <Modal className={classes.modal} {...other}>
            <Paper square className={classes.paper}>
                {makeListItems()}
            </Paper>
        </Modal>
    );
}

export default UserModal;