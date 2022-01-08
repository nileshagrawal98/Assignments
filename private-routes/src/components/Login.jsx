import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { Button, Input } from "antd";
import { MailOutlined } from '@ant-design/icons';

const NavStyle = {
    width: '300px', 
    padding: '20px', 
    border: '1px solid lightgray', 
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px'
}

export const Login = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { handleToken } = useContext(AuthContext);

    const [form, setForm] = useState({ name: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleLogin = () => {
        setLoading(true);
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(({ token }) => handleToken(token)).then(() => setLoading(false)).then(() => navigate(-1));
    }

    return <div style={NavStyle}>
        <Input
            placeholder="Email"
            prefix={<MailOutlined />}
            onChange={(e) => handleChange(e)}
            name="email"
        />
        <Input.Password
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            name="password"
        />
        <Button type="primary" loading={loading} onClick={handleLogin}>
            Login!
        </Button>
    </div>
}