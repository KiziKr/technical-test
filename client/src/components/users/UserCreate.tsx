import React from 'react';
import { FormikProps, Formik, Form } from 'formik';
import { initialValues, userCreateSchema } from './__schema__/userCreateSchema'
import FormControlBase from '../utils/form-controls/FormControlBase';
import { Button, makeStyles } from '@material-ui/core';
import axios from '../../api';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 350,
        minWidth: 360,
    }
});

const UserCreate = () => {
    const classes = useStyles();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userCreateSchema}
            onSubmit={async ({
                email,
                password,
                firstName,
                lastName,
                description,
                phone,
            }, action) => {
                axios.post('/user', {
                    email,
                    password,
                    userSheet: {
                        firstName,
                        lastName,
                        description,
                        phone,
                    },
                }).then(data => {
                    alert('Utilisateur enregistré');
                }).catch(err => {
                    const { detail, title } = err?.response?.data;
                    alert(`${title}:\n${detail}`);
                });
            }}
        >
            {(props: FormikProps<any>) => (
                <Form className={classes.root}>
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            type: 'email',
                            name: 'email',
                            placeholder: 'Email'
                        }}
                    />
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            type: 'password',
                            name: 'password',
                            placeholder: 'Mot de passe',
                        }}
                    />
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            name: 'firstName',
                            placeholder: 'Prénom',
                        }}
                    />
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            name: 'lastName',
                            placeholder: 'Nom',
                        }}
                    />
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            name: 'description',
                            placeholder: 'Déscription',
                        }}
                    />
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            name: 'phone',
                            placeholder: 'Téléphone',
                        }}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        disabled={Object.values(props.errors).length > 0}
                    >
                        S'inscrire
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default UserCreate;