
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ResponsiveAppBarWithRouter from './components/ResponsiveAppBarWithRouter';

import HomePage from './components/HomePage';
import PlayersHomePage from './components/Players/PlayersHomePage';
import TournamentsHomePage from './components/Tournaments/TournamentsHomePage';

import Counter from './components/Examples/Counter';
import BasicDataFlow from './components/Examples/BasicDataFlow';
import MyContextConsumer from './components/Examples/MyContextConsumer';

import './App.css';
import AuthenticationPage from './components/Firebase/Authentication/AuthenticationHomePage';

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
          <Route path='/login' element={
            <header className="App-header" >
              <AuthenticationPage />
            </header >
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
          <Route path='/firebase/login' element={
            <header className="App-header" >
              <AuthenticationPage />
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
