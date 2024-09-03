
import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import PlayersHomePage from './components/Players/PlayersHomePage';
import TournamentsHomePage from './components/Tournaments/TournamentsHomePage';
import Counter from './components/Examples/Counter';
import BasicDataFlow from './components/Examples/BasicDataFlow';

import ResponsiveAppBarWithRouter from './components/ResponsiveAppBarWithRouter';

/*
import ContextConsumer from './components/Examples/ContextConsumer.js';
import Context from 'Context'
*/

import './App.css';
import MyContextConsumer from './components/Examples/MyContextConsumer';

// Pro-tip: you can use rafc (reactArrowFunctionComponent) to generate a functional component out of the box.

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBarWithRouter />

        <Routes>
          <Route path='/' element={
            <header className="App-header">
              <HomePage />
            </header>
          } />
          <Route path='/home' element={
            <header className="App-header">
              <HomePage />
            </header>
          } />
          <Route path='/players' element={
            <header className="App-header">
              <PlayersHomePage />
            </header>
          } />
          <Route path='/tournaments' element={
            <header className="App-header">
              <TournamentsHomePage />
            </header>
          } />
          <Route path='/examples/counter' element={
            <header className="App-header" >
              <Counter />
            </header >
          } />
          <Route path='/examples/basic-data-flow' element={
            <header className="App-header" >
              <BasicDataFlow />
            </header >
          } />
          <Route path='/examples/context-consumer' element={
            <header className="App-header" >
              <MyContextConsumer />
            </header >
          } />
        </Routes>
      </Router>

      {/*<header className="App-header">
        <p>Leonardo Haddad</p>
        <p>ReactJS Playground</p>
      </header>*/}
    </div>
  );
}

export default App;
