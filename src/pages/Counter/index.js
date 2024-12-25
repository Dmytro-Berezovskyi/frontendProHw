import { useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../store/slices/counterSlice";

import {ThemeContext} from "../../context/ThemeContext";

import './Counter.css';

export default function Counter() {
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const {themeMode} = useContext(ThemeContext);

    return (
        <div className="counter-container">
            <div className={`counter-${themeMode}`}>
                <button className="btn-counter" onClick={() => dispatch(decrement())}>-</button>
                <div className="box-count">
                    <span className="count">{count}</span>
                </div>
                <button className="btn-counter" onClick={() => dispatch(increment())}>+</button>
            </div>

            <button className={`btn-reset-${themeMode}`} onClick={() => dispatch(reset())}>Reset Counter</button>
        </div>
    )
}