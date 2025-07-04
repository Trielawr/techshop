import React from 'react';
import { Field, Formik } from "formik";
import { useState } from 'react';
import Icon from '../Icon/Icon';
import Form from 'react-bootstrap/Form';


const FieldForm = ({ validationSchema, iconname, item, text, btnClassName }) => {

const initialValues = { item: '' };

const [find, setFind] = useState(initialValues);

    const handleSubmit = () => {
    //  setFind("value");
    console.log("find",item);
}; 

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}             
    >
    {({ isSbmitting }) => (
        <Form className="d-flex">
            <Field name={`${item}`} >
            {({ field, meta }) => (
                <>
                <input
                    {...field}
                    type='text'
                    placeholder={text}
                    className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
                />
                {meta.touched &&
                    <div className='invalid-feadback'>
                    {meta.error}
                    </div>
                }
                </>
            )}
            </Field>
            <button type='submit' className={`btn ${btnClassName}`} disabled={ isSbmitting }>
            <Icon iconname={iconname} width={'24'} height={'24'} />
            </button>
        </Form>
    )}
    </Formik>
  )
}

export default FieldForm;