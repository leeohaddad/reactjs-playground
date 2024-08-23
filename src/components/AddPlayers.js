import { useState } from 'react';
import React from 'react';

const AddPlayers = ({onAdd}) => {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setSubmittedData({
            name,
            team
        });
        
        console.log("name: " + name);
        console.log("team: " + team);
        console.log("submittedData:");
        console.log(submittedData);

        onAdd(
            name,
            team
        );
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Team:
                    <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} />
                </label>
                <button type='submit'>Submit</button>
            </form>
            {submittedData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p>Name: {submittedData.name}</p>
                    <p>Team: {submittedData.team}</p>
                </div>
            )}
            
        </div>
    )
}

export default AddPlayers;