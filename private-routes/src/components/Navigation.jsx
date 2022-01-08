import { Menu } from "antd"
import { Header } from "antd/lib/layout/layout"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Navigation = () => {

    const {token, handleToken} = useContext(AuthContext);

    const handleLogout = () => {
        handleToken('');
    }

    return <Header style={{marginBottom: "10px"}}>
        <Menu mode="horizontal" theme='dark'>
            <Menu.Item key='1'><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item key='2'><Link to='/dashboard'>Dashboard</Link></Menu.Item>
            {token ? <Menu.Item key='4' onClick={handleLogout}>Logout</Menu.Item> : <Menu.Item key='3'><Link to='/login'>Login</Link></Menu.Item>}
        </Menu>
    </Header>
    
}