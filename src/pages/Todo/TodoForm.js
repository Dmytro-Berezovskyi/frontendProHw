import {Formik, Form, Field, ErrorMessage} from "formik";

import { Input, Button } from 'antd';

export default function TodoForm({addTodo}) {
    const handleSubmit = (values, {resetForm}) => {
        addTodo(values.title);
        resetForm();
    }

    const validate = (values) => {
        const errors = {};

        if (values.title.length < 5) {
            errors.title = "Task must be at least 5 characters!";
        }

        return errors;
    }

    return (
        <Formik
            initialValues={{title: '',}} onSubmit={handleSubmit} validate={validate}
        >
            {({ handleChange, handleBlur, values }) => (
                <Form>
                    <div className='input-form' style={{marginBottom:'10px'}}>
                        <div className='input-err'>
                            <Input
                                name="title"
                                placeholder="Enter new task"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{backgroundColor: 'white'}}
                            />
                            <ErrorMessage name='title' className='error' component='span'/>
                        </div>
                        <Button type='primary' htmlType='submit' style={{height: '100%'}}>Add Task</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}