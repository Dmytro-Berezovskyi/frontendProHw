import {useState} from "react";


export default function TodoForm ({addTodo}) {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        addTodo(title);
        setTitle('');
    }

    return (
        <div className='input-form'>
            <input
                type='text'
                value={title}
                placeholder='Enter new task'
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}