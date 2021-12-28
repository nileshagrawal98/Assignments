import TableItem from './TableItem';

function Table({ form }) {
    let { name, age, address, department, salary, martialStatus, profilePhoto } = form;

    return <table>
        <thead>
            <tr>
                <th style={{textAlign: 'center'}} colspan={2}>User Details</th>
            </tr>
        </thead>
        <tbody>
            <TableItem name='Name' value={name} />
            <TableItem name='Age' value={age} />
            <TableItem name='Address' value={address} />
            <TableItem name='Department' value={department} />
            <TableItem name='Salary' value={salary} />
            <TableItem name='Martial Status' value={martialStatus ? 'Yes' : 'No'} />
            <TableItem name='Profile Photo' value={profilePhoto && <img src={URL.createObjectURL(profilePhoto)} style={{ width: '100px' }} />} />
        </tbody>
    </table>
}

export default Table;