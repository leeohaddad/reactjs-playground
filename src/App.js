import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ResponsiveAppBarWithRouter from './components/ResponsiveAppBarWithRouter';

import './App.css';

// Pro-tip: you can use rafc (reactArrowFunctionComponent) to generate a functional component out of the box.

function App() {
  return (
    /*<Router>
      <Routes>
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/" element={*/

    /* Comment outside the HTML part*/
    <div className="App">
      {/* Comment inside the HTML part*/}
      <ResponsiveAppBarWithRouter />

      {/*<header className="App-header">
        <p>Leonardo Haddad</p>
        <p>ReactJS Playground</p>
      </header>*/}
    </div>

        /*} />
      </Routes>
    </Router>*/
  );
}

export default App;
