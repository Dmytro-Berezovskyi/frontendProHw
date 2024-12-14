import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../../store_old/actions/actions";

export default function Counter() {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <div className="counter">
                <button className="btn-counter" onClick={() => dispatch(decrementCount())}>-</button>
                <div className="box-count">
                    <span className="count">{count}</span>
                </div>
                <button className="btn-counter" onClick={() => dispatch(incrementCount())}>+</button>
            </div>

            <button className="btn-reset" onClick={}>Reset Counter</button>
        </div>
    )
}