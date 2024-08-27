import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ResponsiveAppBarWithRouter from './components/ResponsiveAppBarWithRouter';
import GoogleResponsiveAppBar from './components/Examples/GoogleResponsiveAppBar.js';

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
      
      {/*<ResponsiveAppBarWithRouter />*/}
      {/*<GoogleResponsiveAppBar />*/}
      <ResponsiveAppBarWithRouter />

      {/*<header className="App-header">
        Leonardo Haddad
        ReactJS Playground
      </header>*/}
    </div>

        /*} />
      </Routes>
    </Router>*/
  );
}

export default App;
