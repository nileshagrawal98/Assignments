function GroceryList({list, handleDelete}) {
    return <ul>
        {
            list.map(i => (
            <li key={i.id}><span>{i.name} </span><button onClick={() => handleDelete(i.id)}>Delete</button></li>
            ))
        }
    </ul>
}

export default GroceryList;