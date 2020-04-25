import React, { useState } from "react";

const TeamMembers = props => {
    const [editMember, setEditMember] = useState("");
    const memberToEdit = (event) => {
        event.preventDefault();
        editMember={editMember}
        setEditMember("")
    }
    return (
        <div>
            {props.teamMember.map(member => {
                return (
                    <div>
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                        <button onClick={memberToEdit}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamMembers;