import { useState, useEffect } from "react";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        const errors = {};
        if (!name.length) {
            errors['name'] = 'Please enter your name';
        }
        if (!email.includes('@')) {
            errors['email'] = 'Please provide a valid email';
        }
        const phonePattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;
        if (!phonePattern.test(phone)) {
            errors['phone'] = 'Please provide a valid phone number';
        }
        setValidationErrors(errors);
    }, [name, email, phone])
    return (
        <>
            <form>
                Name<input onChange = {(e) => {
                    setName(e.target.value);
                    console.log(e.target.value);
                }} value = {name} type="text"/>

                Email<input onChange = {e => setEmail(e.target.value)} value = {email} type="text"/>
                Phone <input onChange = {e => setPhone(e.target.value)} value = {phone} type="text"/>
                <select>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
                <label>
                    <input type="radio" name="staff" value="Instructor"/>Instructor
                    <input type="radio" name="staff" value="Student"/>Student
                </label>
                Bio<input type="text-area"/>
                <label>Email Notifs?
                    <input type="checkbox" name="notifications"/>
                </label>
            
            </form>
        </>
    );
}
export default Form;