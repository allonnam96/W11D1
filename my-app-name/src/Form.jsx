import { useState, useEffect } from "react";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);

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

    const handleSubmit = e => {
        e.preventDefault();

        setHasSubmitted(true);
        if (Object.values(validationErrors).length)
            return alert(`The following errors were found:
                ${validationErrors.name ? "* " + validationErrors.name: ""}
                ${validationErrors.email ? "* " + validationErrors.email: ""}
                ${validationErrors.phone ? "* " + validationErrors.phone: ""}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                Name<input onChange = {(e) => {setName(e.target.value)}} value = {name} type="text"/>
                    <div className='error'>
                        {hasSubmitted && validationErrors.name && `* ${validationErrors.name}`}
                    </div>
                Email<input onChange = {e => setEmail(e.target.value)} value = {email} type="text"/>
                    <div className='error'>
                        {hasSubmitted && validationErrors.email && `* ${validationErrors.email}`}
                    </div>
                Phone <input onChange = {e => setPhone(e.target.value)} value = {phone} type="text"/>
                    <div className='error'>
                        {hasSubmitted && validationErrors.phone && `* ${validationErrors.phone}`}
                    </div>
                <select>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
                <label>
                    <input type="radio" name="staff" value="Instructor"/>Instructor
                    <input type="radio" name="staff" value="Student"/>Student
                </label>
                Bio<textarea/>
                <label>Email Notifs?
                    <input type="checkbox" name="notifications"/>
                </label>

                <input type="submit" />
            
            </form>
        </>
    );
}
export default Form;