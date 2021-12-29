import { useRef, useState } from "react";
import './Form.css';


function Form({ setShowTable }) {

    const initFormData = {
        name: '',
        age: '',
        address: '',
        department: '',
        salary: '',
        maritalStatus: '',
        profilePhoto: ''
    }

    const [form, setForm] = useState(initFormData);

    const fileRef = useRef('');

    const handleChange = (e) => {
        let { name, value } = e.target;
        value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({ ...form, [name]: value });
    }

    const fileInput = (e) => {
        setForm({ ...form, profilePhoto: fileRef.current.files[0].name });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/userDetails/', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => setShowTable((prev) => prev + 1)).then(() => setForm(initFormData));
    }

    return <div>
        <h3>User Detail's Form</h3>
        <form onSubmit={handleFormSubmit} className='form'>
            <div>
                <div>
                    <label>Name: </label>
                    <input onChange={handleChange} type='text' name="name" value={form.name} />
                </div>
                <div>
                    <label>Age: </label>
                    <input onChange={handleChange} type='number' name="age" value={form.age} />
                </div>
                <div>
                    <label>Address: </label>
                    <input onChange={handleChange} type='text' name="address" value={form.address} />
                </div>
                <div>
                    <label>Department: </label>
                    <select name="department" onChange={handleChange} value={form.department} >
                        <option value="">--Choose an option--</option>
                        <option value="management">Management</option>
                        <option value="technical">Technical</option>
                        <option value="placement">Placement</option>
                        <option value="safety">Safety</option>
                    </select>
                </div>
                <div>
                    <label>Salary: </label>
                    <input onChange={handleChange} type='number' name="salary" value={form.salary}/>
                </div>
                <div>
                    <label>Marital Status: </label>
                    <input onChange={handleChange} type='checkbox' name="maritalStatus" value={form.maritalStatus}/>
                </div>
                <div>
                    <label>Profile Photo: </label>
                    <input type='file' name="profilePhoto" onChange={fileInput} ref={fileRef} />
                    {fileRef?.current?.files && fileRef?.current?.files[0] && <img src={URL.createObjectURL(fileRef.current.files[0])} style={{ width: '50px' }} />}
                </div>
            </div>

            <input type='submit' />
        </form>
    </div>

}

export default Form;