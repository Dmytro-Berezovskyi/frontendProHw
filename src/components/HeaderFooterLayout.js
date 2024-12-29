import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleThemeMode }  from "../store/slices/themeSlice";

import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;

const items = [
    {
        key: '/',
        label: <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>,
    },
    {
        key: '/about',
        label: <NavLink to="/about" style={{ textDecoration: 'none' }}>About</NavLink>,
    },
];

export default function HeaderFooterLayout () {
    const { themeMode } = useSelector((state) => state.theme);
    console.log(themeMode);
    const dispatch = useDispatch();

    const location = useLocation();
    const currentPath = location.pathname;

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '50px'
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[currentPath]}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content
                style={{
                    padding: '48px 48px',
                    margin: '0 48px',
                    background: colorBgContainer,
                    minHeight: '82vh',
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>

    )
}

//<>
//    <button onClick={() => dispatch(toggleThemeMode())}>Toggle Theme</button>
//    <div style={{width:'100px', height: '100px', background: "black", color: 'white'}}>{themeMode}</div>
//</>