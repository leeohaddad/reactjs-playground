import React, { useEffect, useState } from 'react';

import AddPlayers from './AddPlayers';
import PlayersList from './PlayersList';

import './../../App.css';

function PlayersPage() {
  const [playersList, setPlayersList] = useState(([]));
  /* const [playersList, setPlayersList] = useState([
    { id: 1, name: "John", team: "Soulfrisbee" },
    { id: 2, name: "Paul", team: "Brasa" },
    { id: 3, name: "George", team: "Soulfrisbee" },
    { id: 4, name: "Ringo", team: "Brasa" }
  ]); */

  useEffect(() => {
    const updatePlayersList = async () => {
      const playersFromServer = await fetchPlayersList();
      setPlayersList(playersFromServer);
    }

    updatePlayersList();
  }, []);

  const fetchPlayersList = async () => {
    const response = await fetch("http://localhost:5000/playersList");
    const data = await response.json();
    return data;
  }

  const addPlayerLocally = (name, team) => {
    const newPlayer = {
      // id: playersList.length + 1, => does not work cause deleting and then adding leads to duplicate IDs
      // ideal solution for ID: store the highest ID somewhere and increment it
      id: Math.floor(Math.random() * 1000) + 1,
      name: name,
      team: team
    };

    console.log("newPlayer:");
    console.log(newPlayer);

    setPlayersList([...playersList, newPlayer]);
  }

  const addPlayerToServer = async (name, team) => {
    const response = await fetch("http://localhost:5000/playersList", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ name, team })
    });
  }

  const addPlayer = (name, team) => {
    // Ideally you would only have the server part, just keeping both for reference / learning purpose.
    addPlayerLocally(name, team);
    addPlayerToServer(name, team);
  }

  const deletePlayerLocally = (id) => {
    console.log("Deleting player:");
    console.log(id);

    setPlayersList(playersList.filter((player) => player.id !== id));
  }

  const deletePlayerFromServer = async (id) => {
    await fetch(`http://localhost:5000/playersList/${id}`, {
      method: "DELETE"
    });
  }

  const deletePlayer = (id) => {
    deletePlayerLocally(id);
    deletePlayerFromServer(id);
  }

  return (
    <div>
      < AddPlayers onAdd = { addPlayer } />
      <div>
        <h1>Players List </h1>
          < PlayersList playersList = { playersList } onDelete = { deletePlayer } />
      </div>
    </div>
  );
}

export default PlayersPage;
