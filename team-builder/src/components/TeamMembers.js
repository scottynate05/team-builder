import React from "react";

const TeamMembers = props => {
    return (
        <div>
            {props.teamMember.map(member => {
                return (
                    <div>
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamMembers;