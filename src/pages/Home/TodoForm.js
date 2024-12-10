import {Formik, Form, Field, ErrorMessage} from "formik";


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