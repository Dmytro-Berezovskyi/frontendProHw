import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;

const items = [
    {
        key: "/",
        label: <NavLink to="/" style={{ textDecoration: "none" }}>Home</NavLink>,
    },
    {
        key: "/about",
        label: <NavLink to="/about" style={{ textDecoration: "none" }}>About</NavLink>,
    },
    {
        key: "/hotels",
        label: <NavLink to="/hotels" style={{ textDecoration: "none" }}>Hotels</NavLink>,
    },
];

export default function HeaderFooterLayout () {
    const location = useLocation();
    const currentPath = location.pathname;

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "50px"
                }}
            >
                <NavLink to={"/"} style={{
                    border: "3px solid white",
                    padding: "5px",
                    marginRight: "10px",
                    height: "85%",
                    display: "flex",
                    alignItems: "center"
                }}>
                    <h1 style={{
                        textTransform: "uppercase",
                        fontWeight: "800",
                        fontSize: "20px",
                        margin: 0,
                        color: "white"
                    }}>
                        Plan&Stay
                    </h1>
                </NavLink>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={currentPath}
                    items={items}
                    style={{flex: 1, minWidth: 0}}
                />
            </Header>
            <Content
                style={{
                    padding: "48px 48px",
                    margin: "0 48px",
                    background: colorBgContainer,
                    minHeight: "82vh",
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet />
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    )
}