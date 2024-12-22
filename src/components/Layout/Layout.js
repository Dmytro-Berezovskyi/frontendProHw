//import {useContext} from "react";
import {NavLink, Outlet} from 'react-router-dom'
//
//import {ThemeContext} from "../../context/ThemeContext";
//
//import './Layout.css'
//
//export default function Layout() {
//    const {theme, toggleTheme} = useContext(ThemeContext);
//
//    return (
//        <div className='container'>
//            <div className={`header-${theme}`}>
//                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/">Home</NavLink>
//                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/about/">About Me</NavLink>
//                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/contacts/">Contacts</NavLink>
//                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/form/">Form</NavLink>
//                <NavLink style={{color: 'white', textDecoration: 'none'}} to="/counter/">Counter</NavLink>
//                <button onClick={toggleTheme} style={{background: 'transparent', color: 'white', border: 'none', cursor: 'pointer'}}>Change Theme</button>
//            </div>
//
//            <Outlet />
//        </div>
//    )
//}

import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));
export default function LayoutAnt() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <div style={{display: 'flex', gap: '20px'}}>
                    <NavLink style={{color: 'white', textDecoration: 'none'}} to="/">Home</NavLink>
                    <NavLink style={{color: 'white', textDecoration: 'none'}} to="/about/">About Me</NavLink>
                    <NavLink style={{color: 'white', textDecoration: 'none'}} to="/contacts/">Contacts</NavLink>
                    <NavLink style={{color: 'white', textDecoration: 'none'}} to="/form/">Form</NavLink>
                    <NavLink style={{color: 'white', textDecoration: 'none'}} to="/counter/">Counter</NavLink>
                    <button style={{background: 'transparent', color: 'white', border: 'none', cursor: 'pointer'}}>Change Theme</button>
                </div>
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 800,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};