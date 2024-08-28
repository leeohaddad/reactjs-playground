
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

// Pro-tip: you can use rafc (reactArrowFunctionComponent) to generate a functional component out of the box.

export const Context = createContext();

function App() {
  /*
  const textProvider = () => {
    const [text, setText] = useState('Hello World');
  }

  const toggleText = () => {
    if (text == 'Hello World') {
      setText('Welcome to React');
    } else {
      setText('Hello World');
    }
  }
  */

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
              Context Consumer
              {/*
              <Context.Provider value={{ text, setText }}>
                <ContextConsumer />
              </Context.Provider>

              Text value: {text}
              */}
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
