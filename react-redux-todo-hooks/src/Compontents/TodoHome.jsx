import { Input, Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess } from '../Store/action';
import { TodoListHome } from './TodoListHome';

export const TodoHome = () => {

    const { todos, loading, error, total, completed } = useSelector(state => ({ todos: state.todos, loading: state.loading, error: state.error, total: state.total, completed: state.completed }));

    const [text, setText] = useState('');
    const [detail, setDetail] = useState('');
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(addTodoLoading());
        fetch('http://localhost:3001/todos', {
            method: 'POST',
            body: JSON.stringify({ title: text, status: false, detail: detail }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                dispatch(addTodoSuccess(data));
            }).catch(err => dispatch(addTodoError(err)));
        getTodo();
        setText('');
        setDetail('');
    }

    const getTodo = () => {
        dispatch(getTodoLoading());
        fetch('http://localhost:3001/todos')
            .then(res => res.json())
            .then(data => dispatch(getTodoSuccess(data)))
            .catch(err => dispatch(getTodoError(err)));
    }

    useEffect(() => {
        getTodo();
    }, [])

    return <div style={{ display: 'flex', columnGap: '10px', justifyContent: 'space-around' }} >
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid lightgray', width: '30vw', margin: '10px auto', height: 'fit-content' }}>
            <h2>Total: {total}, Completed: {completed}</h2>
            <h2>Enter Todo:</h2>
            <Input placeholder="Enter Todo" value={text} onChange={(e) => setText(e.target.value)} style={{ maxWidth: '600px', margin: '10px auto', }} />
            <TextArea
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                placeholder="Enter Detail"
                autoSize={{ minRows: 10, maxRows: 20 }}
                style={{ maxWidth: '600px', margin: '10px auto', }}
            />
            <Button onClick={handleOnClick} style={{ width: '150px' }}>Add Todo</Button>
        </div>
        {loading ? 'Loading...' : error ? 'Opps, something went wrong' : <TodoListHome todos={todos} />}

    </div>

}