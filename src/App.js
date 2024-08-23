import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ParentToChild from './components/ParentToChild';
import ChildToParent from './components/ChildToParent';

import ResponsiveAppBar from './components/ResponsiveAppBar';

import AddPlayers from './components/AddPlayers';
import PlayersList from './components/PlayersList';
import Tournaments from './components/Tournaments';

import './App.css';
import logo from './logo.svg';


// Pro-tip: you can use rafc (reactArrowFunctionComponent) to generate a functional component out of the box.

function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("today");
  const [messageCTP, setMessageCTP] = useState("Initial Parent Message");
  const [messagePTC, setMessagePTC] = useState("Initial Child Message");

  const handleCTPMessageChange = (newMessage) => {
    setMessageCTP(newMessage);
  }

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
    <Router>
      <Routes>
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/" element={
          <div className="App">
            <ResponsiveAppBar />
            <header className="App-header">
              <AddPlayers onAdd={addPlayer} />
              <div>
                <h1>Players List</h1>
                <PlayersList playersList={playersList} onDelete={deletePlayer} />
              </div>

              {/*
        <p>You clicked {count} times {date}</p>
        <button onClick={() => setCount(count + 1)}>
          Count Up
        </button>
        <button onClick={() => setCount(count - 1)}>
          Count Down
        </button>
        <button onClick={() => setDate("today")}>
          Today
        </button>
        <button onClick={() => setDate("tomorrow")}>
          Tomorrow
        </button>

        <ParentToChild message={messagePTC} />
        <button onClick={() => setMessagePTC("Bye Bye")}>
          Change the child message to 'Bye Bye'
        </button>
        <button onClick={() => setMessagePTC("Good Bye")}>
          Change the child message to 'Good Bye'
        </button>

        <p>This is the message in the Parent: {messageCTP}</p>
        <ChildToParent onMessageChange={setMessageCTP} />
        <ChildToParent onMessageChange={handleCTPMessageChange} />
      */}

              {/* Auto Generated (below) */}

              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              Learn React
            </header>
          </div>
        } />
      </Routes>


    </Router>
  );
}

export default App;
