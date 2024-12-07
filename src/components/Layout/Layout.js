import {NavLink, Outlet} from 'react-router-dom'

import './Layout.css'

export default function Layout() {
    return (
        <div className='container'>
            <div className='header'>
                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/">Home</NavLink>
                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/about/">About Me</NavLink>
                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/contacts/">Contacts</NavLink>
            </div>

            <Outlet />
        </div>
    )
}