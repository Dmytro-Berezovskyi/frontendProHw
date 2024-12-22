import { useContext } from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/userSlice";

import {ThemeContext} from "../../context/ThemeContext";

import './Login.css';

export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const from = location.state?.from || "/";

    const {theme} = useContext(ThemeContext);

    const handleLogin = () => {
        dispatch(login());
        navigate(from, {replace: true});
    }

    return (
        <div className="login-form">
            <div className={`left-box-${theme}`}><h1>Welcome!</h1></div>
            <div className="right-box">
                <h2>Login</h2>
                <button className={`btn-${theme}`} onClick={handleLogin}>Log In</button>
            </div>
        </div>
    )
}