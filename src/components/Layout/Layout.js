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
import { Breadcrumb, Layout, theme } from 'antd';
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

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
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/about/">About Me</Breadcrumb.Item>
                    <Breadcrumb.Item href="/form/">Form</Breadcrumb.Item>
                    <Breadcrumb.Item href="/counter/">Counter</Breadcrumb.Item>
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    textAlign: 'center',
                }}
            >
                <span style={{fontSize: '15px'}}>Contacts:</span>
                <NavLink to="https://www.facebook.com"><FacebookOutlined style={{fontSize: '20px'}} /></NavLink>
                <NavLink to="https://www.instagram.com"><InstagramOutlined style={{fontSize: '20px'}} /></NavLink>
                <NavLink to="https://www.linkedin.com/feed/"><LinkedinOutlined  style={{fontSize: '20px'}} /></NavLink>

            </Footer>
        </Layout>
    );
};