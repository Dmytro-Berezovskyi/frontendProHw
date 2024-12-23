import {NavLink, Outlet} from 'react-router-dom'

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
                    marginBottom: '30px',
                }}
            >
                <div className="demo-logo" />
                <div style={{display: 'flex', gap: '20px'}}>
                    <NavLink style={{color: 'white', textDecoration: 'none'}} to="/">Home</NavLink>
                    <NavLink style={{color: 'white', textDecoration: 'none'}} to="/resume/">Resume</NavLink>
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
                <NavLink to="https://www.facebook.com" replace><FacebookOutlined style={{fontSize: '20px'}} /></NavLink>
                <NavLink to="https://www.instagram.com" replace><InstagramOutlined style={{fontSize: '20px'}} /></NavLink>
                <NavLink to="https://www.linkedin.com/feed/" replace><LinkedinOutlined  style={{fontSize: '20px'}} /></NavLink>

            </Footer>
        </Layout>
    );
};