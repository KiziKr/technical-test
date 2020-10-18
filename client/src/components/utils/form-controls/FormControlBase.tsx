import React from 'react';
import { InputBase, InputBaseProps, makeStyles } from '@material-ui/core';
import { BasicInputProps } from './FormFeedback';
import { FormFeedback } from './FormFeedback';
import clsx from 'clsx';

interface FormControlBaseProps {
    formikProps: BasicInputProps<any>
    inputProps?: InputBaseProps;
    info?: string;
    escapeValue?: boolean;
}

const useStyles = makeStyles({
    input: {
        border: '1px solid rgba(255,255,255,0.3)',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#fff',
        padding: '0 10px',
        height: 40,
    }
});

const FormControlBase = ({
    formikProps,
    inputProps,
    info,
}: FormControlBaseProps
) => {
    const name = (inputProps && inputProps.name) || '';
    const classes = useStyles();

    return (
        <FormFeedback
            formikProps={formikProps}
            name={name}
            info={info}
        >
            <InputBase
                className={clsx(classes.input, inputProps?.className)}
                fullWidth={true}
                {...inputProps}
            />
        </FormFeedback>
    )
}

export default FormControlBase;