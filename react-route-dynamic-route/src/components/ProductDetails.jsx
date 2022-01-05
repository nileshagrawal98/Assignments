import { Content } from 'antd/lib/layout/layout';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';

export const ProductDetails = () => {
    const {id} = useParams();

    const [data, setData] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then(res => res.json())
        .then(data => {
            if(!data.id){
                setData(-1);
            }else{
                setData(data);
            }
        });
    }, []);

    if(!data){
        return <h1>Loading...</h1>
    }else if(data === -1){
        return <h1>Product does not exist</h1>
    }

    return <Content style={{ padding: '0 50px'}}>
        <div>
            <h2>Name: {data.name}</h2>
            <h3>Price: {data.price}</h3>
            <h3>Color: {data.color}</h3>
            <h3>Year: {data.year}</h3>
        </div>
    </Content>
    
}