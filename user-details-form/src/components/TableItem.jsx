function TableItem({ name, age, address, department, salary, maritalStatus, profilePhoto}) {
    return <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{address}</td>
        <td>{department}</td>
        <td>{salary}</td>
        <td>{maritalStatus ? 'Yes' : 'No'}</td>
        <td>{profilePhoto}</td>

    </tr>

}

export default TableItem;