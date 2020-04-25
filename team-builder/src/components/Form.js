import React, { useState } from 'react';

const Form = ({ addMember }) => {
    const [teamMember, setTeamMember] = useState({name: "", email: "", role: ""});
    const handleChange = event => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value });
    }

    const submitForm = event => {
        event.preventDefault();
        addMember(teamMember);
        setTeamMember({name: "", email: "", role: ""});
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlfor="name">Name</label>
            <input
                id="name"
                type="text"
                value={teamMember.name}
                name="name"
                onChange={handleChange}
            />
            <label htmlfor="email">Email</label>
            <input
                id="email"
                type="text"
                value={teamMember.email}
                name="email"
                onChange={handleChange}
            />
            <label htmlfor="role">Role</label>
            <input
                id="role"
                type="text"
                value={teamMember.role}
                name="role"
                onChange={handleChange}
            />
            <button type="submit">Add Team Member</button>
        </form>
    )

}

export default Form;