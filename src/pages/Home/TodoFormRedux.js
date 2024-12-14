import {Formik, Form, Field, ErrorMessage} from "formik";
import { useDispatch } from "react-redux";

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

    return (
        <Formik
            initialValues={{title: '',}} onSubmit={() => dispatch(addTodoRedux({title: 'vdfsv', completed: false}))} validate={validate}
        >
            {({ values }) => (
                <Form>
                    <div className='input-form'>
                        <div className='input-err'>
                            <Field
                                type='text'
                                placeholder='Enter new task'
                                name='title'
                            />
                            <ErrorMessage name='title' className='error' component='span'/>
                        </div>
                        <button type='submit'>Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}