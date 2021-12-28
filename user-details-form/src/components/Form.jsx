import { useRef } from "react";

function Form({ setForm, form, handleFormSubmit }) {

    const fileRef = useRef('');

    const handleChange = (e) => {
        let { name, value } = e.target;
        // console.log(e)
        value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({ ...form, [name]: value });
    }

    const fileInput = (e) => {
        // console.log(fileRef.current.files[0])
        setForm({ ...form, profilePhoto: fileRef.current.files[0] });
    }

    return <form onSubmit={handleFormSubmit}>
        <div>
            <label>Name: </label>
            <input onChange={handleChange} type='text' name="name" />
        </div>
        <div>
            <label>Age: </label>
            <input onChange={handleChange} type='number' name="age" />
        </div>
        <div>
            <label>Address: </label>
            <input onChange={handleChange} type='text' name="address" />
        </div>
        <div>
            <label>Department: </label>
            <select name="department" onChange={handleChange}>
                <option value="">--Choose an oprion--</option>
                <option value="management">Management</option>
                <option value="technical">Technical</option>
                <option value="placement">Placement</option>
                <option value="safety">Safety</option>
            </select>
        </div>
        <div>
            <label>Salary: </label>
            <input onChange={handleChange} type='number' name="salary" />
        </div>
        <div>
            <label>Martial Status: </label>
            <input onChange={handleChange} type='checkbox' name="martialStatus" />
        </div>
        <div>
            <label>Profile Photo: </label>
            <input type='file' name="profilePhoto" onChange={fileInput} ref={fileRef} />
            {fileRef?.current?.files && fileRef?.current?.files[0] && <img src={URL.createObjectURL(fileRef.current.files[0])} style={{ width: '50px' }} />}
        </div>

        <input type='submit' />
    </form>

}

export default Form;