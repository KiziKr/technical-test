import React, { useState } from 'react';
import { FormikErrors } from "formik";
import { FormHelperText } from '@material-ui/core';

export interface BasicInputProps<T> {
    errors: FormikErrors<T>;
    handleChange(e: React.ChangeEvent<any>): void;
    isSubmitting: boolean;
    info?: string;
    setFieldValue?: any;
}

/**
 * 
 */
export interface FormFeedbackProps {
    formikProps: BasicInputProps<any>;
    info?: string;
    children: any;
    name: string;
}

/**
 * 
 */
export const FormFeedback = ({
    formikProps,
    info,
    children,
    name,
}: FormFeedbackProps) => {
    const [clicked, setClicked] = useState(false);
    const [checked, setChecked] = useState(false);
    const [writed, setWrited] = useState(false);

    return (
        <div className='form-feedback-container'>
            {React.cloneElement(
                React.Children.only(children),
                {
                    onChange: (e: any) => {
                        formikProps.handleChange(e);

                        if (writed === false) {
                            setWrited(true);
                        }
                    },
                    onClick: () => {
                        setChecked(false);
                        setClicked(true);
                    },
                    onBlur: (e: any) => {
                        if (writed) {
                            setChecked(true)
                        }
                        else if (!checked && e.target.value !== '') {
                            setChecked(true);
                        }
                        setClicked(false);
                    },
                }
            )}
            {formikProps.errors && formikProps.errors[name] && checked &&
                <FormHelperText error={true}>
                    {formikProps.errors[name] as string}
                </FormHelperText>
            }
            {info && clicked &&
                <FormHelperText className='Mui-text'>
                    {info}
                </FormHelperText>
            }
        </div>
    )
}