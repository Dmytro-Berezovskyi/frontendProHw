import { useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount, resetCount } from "../../store_old/actions/actions";

import {ThemeContext} from "../../context/ThemeContext";

import './Counter.css';

export default function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const {theme} = useContext(ThemeContext);

    return (
        <div className="counter-container">
            <div className={`counter-${theme}`}>
                <button className="btn-counter" onClick={() => dispatch(decrementCount())}>-</button>
                <div className="box-count">
                    <span className="count">{count}</span>
                </div>
                <button className="btn-counter" onClick={() => dispatch(incrementCount())}>+</button>
            </div>

            <button className={`btn-reset-${theme}`} onClick={() => dispatch(resetCount())}>Reset Counter</button>
        </div>
    )
}