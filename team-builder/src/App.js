import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import TeamMembers from "./components/TeamMembers";

function App() {
  const [teamMember, setTeamMember] = useState([]);

  const addMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <Form addMember={addMember} />
      <TeamMembers teamMember={teamMember} />
    </div>
  );
}

export default App;
