import { Affix, Layout , Menu} from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export const Navbar = () => {

    return <Affix offsetTop={0}>
    <Header style={{position: 'sticky', zIndex: 1, width: '100%'}}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key='1'>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link to="/products">Products</Link>
                </Menu.Item>
            </Menu>
        </Header>
    </Affix>

}