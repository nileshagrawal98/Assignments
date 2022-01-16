import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Button } from "antd/lib/radio";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTodoError, editTodoLoading, editTodoSuccess } from "../Store/action";

export const TodoEdit = () => {

    const [text, setText] = useState('');
    const [detail, setDetail] = useState('');
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getTodo()
    }, []);

    const getTodo = () => {
        setLoading(true);
        fetch(`http://localhost:3001/todos/${id}`)
            .then(res => res.json())
            .then(data => {
                setText(data.title)
                setDetail(data.detail)
                setLoading(false);
            }).catch(err => setError(true));
    }

    const handleOnClick = () => {
        dispatch(editTodoLoading());
        fetch(`http://localhost:3001/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ title: text, detail: detail }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                dispatch(editTodoSuccess(data));
                navigate(-1);
            }).catch(err => dispatch(addTodoError(err)));
        getTodo();
        setText('');
        setDetail('');
    }

    return <div style={{ display: 'flex', columnGap: '10px', justifyContent: 'space-around' }} >
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid lightgray', width: '30vw', margin: '10px auto', height: 'fit-content' }}>
            <h2>Enter Todo: </h2>
            <Input placeholder="Enter Todo" value={text} onChange={(e) => setText(e.target.value)} style={{ maxWidth: '600px', margin: '10px auto', }} />
            <TextArea
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                placeholder="Enter Detail"
                autoSize={{ minRows: 10, maxRows: 20 }}
                style={{ maxWidth: '600px', margin: '10px auto', }}
            />
            <div>
                <Button onClick={handleOnClick} style={{ width: '150px' , marginRight: '10px'}}>Edit Todo</Button>
                <Button onClick={() => navigate('/')} style={{ width: '150px' }}>Go To Home</Button>
            </div>

        </div>
    </div>

}