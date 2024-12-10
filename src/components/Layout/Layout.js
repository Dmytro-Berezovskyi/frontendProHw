import {useContext} from "react";
import {NavLink, Outlet} from 'react-router-dom'

import {ThemeContext} from "../../context/ThemeContext";

import './Layout.css'

export default function Layout() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className='container'>
            <div className={`header-${theme}`}>
                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/">Home</NavLink>
                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/about/">About Me</NavLink>
                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/contacts/">Contacts</NavLink>
                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/form/">Form</NavLink>
                <button onClick={toggleTheme} style={{background: 'transparent', color: 'white', border: 'none', cursor: 'pointer'}}>Change Theme</button>
            </div>

            <Outlet />
        </div>
    )
}