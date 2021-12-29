import TableItem from './TableItem';
import './Table.css'
function Table({ userDetails }) {
    return <table className="table">
        <thead>
            <tr>
                <th style={{textAlign: 'center'}} colSpan={7}>User Detail's Table</th>
            </tr>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Marital Status</th>
                <th>Profile Photo</th>
            </tr>
        </thead>
        <tbody>
            {
                userDetails.map(user => <TableItem key={user.id} {...user}/>)
            }
        </tbody>
    </table>
}

export default Table;