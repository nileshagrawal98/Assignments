import { Button, Table } from "antd"
import { Navigate, useNavigate } from "react-router-dom"

export const TodoListHome = ({ todos }) => {

    const navigate = useNavigate();

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'id',
            align: 'center',
            render: (record, item) => <span>{item.status ? <label style={{color: 'green'}}>Done</label> :  <label style={{color: 'coral'}}>Not Done</label>} </span>
        },
        // {
        //     title: 'Edit',
        //     dataIndex: '',
        //     key: 'id',
        //     align: 'center',
        //     render: (record) => <Button onClick={() => navigate(`/todo/${record.id}/edit`)}>Edit</Button>
        // }
    ]

    return <div style={{width: '60vw', margin: '10px auto'}}>
        <Table 
        dataSource={todos} 
        columns={columns} 
        pagination={{pageSize: 10}} 
        rowKey='id'
        onRow={(record) => {
            return {
                onClick: () => navigate(`/todo/${record.id}`)
            }
        }}
        />
    </div>

}