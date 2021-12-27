const { useState } = require("react");

function GroceryInput ({ handleAdd }) {
    const [text, setText] = useState('');

    const handleInput = (e) =>{
        setText(e.target.value);
    }

    return <>
        <input placeholder="Enter Grocery item" onChange={handleInput}/>
        <button onClick={() => handleAdd(text)} >Add Item</button>
    </>
}

export default GroceryInput;
