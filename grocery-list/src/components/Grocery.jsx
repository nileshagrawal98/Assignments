const { useState } = require("react");
import GroceryInput from './GroceryInput'
import {v4 as uuid} from 'uuid';
import GroceryList from './GroceryList';

function Grocery() {

    const [list, setList] = useState([]);

    const handleAdd = (data) => {
        let payload = {
            name: data,
            id: uuid()
        }
        setList([...list, payload]);
    }

    const handleDelete = (id) => {
        let newList = list.filter(i => i.id !== id);
        setList(newList);
    }

    return <div>
        <h2>Grocery List</h2>
        <GroceryInput handleAdd={handleAdd}/>
        <GroceryList handleDelete={handleDelete} list={list}/>
    </div>

}

export default Grocery;