import { PageHeader, Tag } from 'antd';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
export const TodoDetail = () => {

    const [todo, setTodo] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        getTodo()
    }, []);

    const getTodo = () => {
        fetch(`http://localhost:3001/todos/${id}`)
            .then(res => res.json())
            .then(data => {
                setTodo(data);
                setLoading(false);
            }).catch(err => setError(true));
    }

    const toggleTodoStatusInServer = () => {
        setLoading(true);
        fetch(`http://localhost:3001/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ ...todo, status: !todo.status }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                getTodo();
            }).catch(err => setError(true));
    }

    const deleteTodoInServer= () => {
        setLoading(true);
        fetch(`http://localhost:3001/todos/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                navigate('/');
            }).catch(err => setError(true));
    }

    const handleEdit = () => {
        navigate(`/todo/${id}/edit`);
    }


    return loading ? <h2>Loading...</h2> : error ? 'Opps, Something went wrong...' : <div>
        <PageHeader
            title={todo.title}
            onBack={() => navigate('/')}
            tags={todo.status ? <Tag color="green">Completed</Tag> : <Tag color="coral">Pending</Tag>}
            extra={[<Button key="1" type="primary" onClick={toggleTodoStatusInServer}>
                {todo.status ? "Mark Not Completed" : "Mark Completed"}
            </Button>, <Button key="2" type="primary" danger onClick={deleteTodoInServer}>
                Delete
            </Button>, <Button key="3" type="primary" danger onClick={handleEdit}>
                Edit
            </Button>]}
        />
        <div style={{ margin: '20px', padding: '15px', border: '1px solid lightgray' }}>
            <h3>Details: </h3>
            <p>{todo.detail}</p>
        </div>
    </div>

}