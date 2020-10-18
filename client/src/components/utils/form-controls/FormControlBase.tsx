import React from 'react';
import { InputBase, InputBaseProps } from '@material-ui/core';
import { BasicInputProps } from './FormFeedback';
import { FormFeedback } from './FormFeedback';

interface FormControlBaseProps {
    formikProps: BasicInputProps<any>
    inputProps?: InputBaseProps;
    info?: string;
    escapeValue?: boolean;
}

const FormControlBase = ({
    formikProps,
    inputProps,
    info,
}: FormControlBaseProps
) => {
    const name = (inputProps && inputProps.name) || '';

    return (
        <FormFeedback
            formikProps={formikProps}
            name={name}
            info={info}
        >
            <InputBase
                {...inputProps}
                fullWidth={true}
                className={inputProps && inputProps.className}
            />
        </FormFeedback>
    )
}

export default FormControlBase;