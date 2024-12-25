import {Formik, Form, Field, ErrorMessage} from "formik";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { Input, Button } from 'antd';

import {addTodoRedux} from "../../store/slices/todoSlice";


export default function TodoFormRedux() {
    const dispatch = useDispatch();

    const validate = (values) => {
        const errors = {};

        if (values.title.length < 5) {
            errors.title = "Task must be at least 5 characters!";
        }

        return errors;
    }

    const handleSubmit = (values, { resetForm }) => {
        dispatch(addTodoRedux({id: uuid(),title: values.title, completed:false}))
        resetForm();
    }

    return (
        <Formik
            initialValues={{title: '',}} onSubmit={handleSubmit} validate={validate}
        >
            {({ handleBlur, handleChange, values }) => (
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
                        <Button type='primary' htmlType='submit' style={{height: '100%'}}>Submit</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}