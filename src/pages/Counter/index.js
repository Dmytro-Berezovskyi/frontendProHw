import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <>
        </>
    )
}