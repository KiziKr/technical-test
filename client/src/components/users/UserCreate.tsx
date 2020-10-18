import React from 'react';
import { FormikProps, Formik, Form } from 'formik';
import { initialValues, userCreateSchema } from './__schema__/userCreateSchema'
import FormControlBase from '../utils/form-controls/FormControlBase';
import { Button } from '@material-ui/core';
import axios from '../../api';

const UserCreate = (props: { onSuccess: Function }) => {
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
                    if (props.onSuccess) {
                        props.onSuccess(data);
                    }
                }).catch(err => {
                    console.log(err)
                    const { detail, title } = err?.response?.data;
                    alert(`${title}:\n${detail}`);
                });
            }}
        >
            {(props: FormikProps<any>) => (
                <Form>
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            type: 'email',
                            name: 'email',
                        }}
                    />
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            type: 'password',
                            name: 'password',
                        }}
                    />
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            name: 'firstName',
                        }}
                    />
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            name: 'lastName',
                        }}
                    />
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            name: 'description',
                        }}
                    />
                    <FormControlBase
                        formikProps={{ ...props }}
                        inputProps={{
                            name: 'phone',
                        }}
                    />
                    <Button type='submit' disabled={Object.values(props.errors).length > 0}>Submit</Button>
                </Form>
            )}
        </Formik>
    );
};

export default UserCreate;