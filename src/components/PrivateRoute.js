import {useNavigate, useLocation, Navigate} from "react-router-dom";

import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
    const location = useLocation();
    const authenticated = useSelector(state => state.user.isLogin);

    return authenticated ? children : <Navigate to="/login" replace state={{from: location.pathname}} />;
}