import {useContext} from "react";

import {Formik, Form, Field, ErrorMessage} from "formik";

import {ThemeContext} from "../../context/ThemeContext";

import './Form.css';


export default function FormikForm() {
    const initialValues = {
        name: "",
        email: "",
        password: "",
    }

    const {theme} = useContext(ThemeContext);

    const handleSubmit = (values, {resetForm}) => {
        console.log(`Form submitted! ${JSON.stringify(values)}`);
        resetForm();
    }

    const validate = (values) => {
        const errors = {};

        if (values.name.length < 3) {
            errors.name = 'Name must be at least 3!';
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = 'Enter a valid email address!';
        }

        return errors;
    }

    return (
        <Formik
            initialValues={initialValues} onSubmit={handleSubmit} validate={validate}
        >
            {({ values }) => (
                <Form className='form'>
                    <h1>Log In</h1>
                    <div className='container-form'>
                        <div className='input-box'>
                            <Field
                                type='text'
                                placeholder='Enter Name'
                                name='name'
                            />
                            <ErrorMessage name='name' className='error' component='span'/>
                        </div>
                        <div className='input-box'>
                            <Field
                                type='text'
                                placeholder='Enter Email'
                                name='email'
                            />
                            <ErrorMessage name='email' className='error' component='span'/>
                        </div>
                        <div className='input-box'>
                            <Field
                                type='text'
                                placeholder='Enter Password'
                                name='password'
                            />
                            <ErrorMessage name='password' className='error' component='span'/>
                        </div>
                        <button type='submit' className={`btn-${theme}`} style={{}}>Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}