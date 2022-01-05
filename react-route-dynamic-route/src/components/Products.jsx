import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
export const Products = () => {

    const [data, setData] = useState();

    const handleRowClick = (record, rowIndex) => {
        return {

            onClick: event => {
                // <Redirect push to={`/products/${record.id}`} />
            }

        }
    }

    useEffect(() => {
        fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'More Details',
            render: (data) => <Link to={`/products/${data.id}`}>More Details</Link>
        }
    ]

    return <Table columns={columns} dataSource={data} rowKey="id" onRow={handleRowClick} />

}