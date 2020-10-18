import React from 'react';
import { ModalProps, Modal, List, ListItemText, ListItem, makeStyles, Paper } from '@material-ui/core';

interface UserModalProps extends Omit<ModalProps, 'children'> {
    userId: string;
    userEmail: string;
    userCreatedAt: string;
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
    },
}));

const UserModal = ({ userId, userEmail, userCreatedAt, ...other }: UserModalProps) => {
    const classes = useStyles();

    return (
        <Modal className={classes.modal} {...other}>
            <Paper className={classes.paper}>
                <List dense={false}>
                    <ListItem>
                        <ListItemText
                            primary='Prénom: Romain'
                        />
                    </ListItem>
                </List>
            </Paper>
        </Modal>
    );
}

export default UserModal;