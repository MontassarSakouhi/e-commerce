

import { Outlet, useNavigate } from 'react-router-dom'
import { UserPen, LogOut, ClockArrowUp, BadgePlus, List } from 'lucide-react';
import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Add Product', '/admin/add', <BadgePlus />),
    getItem('Product List', '/admin/product', <List />),
    getItem('Order List', '/admin/order', <ClockArrowUp />),
    getItem('Users List', '/admin/user', <UserPen />),
    getItem('LogOut', 'logout', <LogOut />),

];


const AdminDashboard = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const handleMenuClick = (e) => {
        if (e.key == 'logout') {
            localStorage.clear()
            navigate('/', { replace: true })
            return
        }
        navigate(e.key)

    };
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu className='my-auto' theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick} />
            </Sider>
            <Layout>

                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >

                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
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
                    Welcome to the admin dashbord
                </Footer>
            </Layout>
        </Layout>
    );

}

export default AdminDashboard


