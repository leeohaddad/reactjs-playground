import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './../App.css';
import logo from './../logo.svg';

// Pro-tip: you can use rafc (reactArrowFunctionComponent) to generate a functional component out of the box.

function HomePage() {
  return (
        /* Comment outside the HTML part*/
          <div>
            {/* Comment inside the HTML part*/}
            <p id='menu'>
                Meet our current pages:
                <ul>
                  <li><a href='/players'> Players </a></li>
                  <li><a href='/tournaments'> Tournaments </a></li>
                  <li><a href='/examples/counter'> Examples: Counter </a></li>
                  <li><a href='/examples/basic-data-flow'> Examples: Basic Data Flow </a></li>
                </ul>
              </p>

              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              Learn React
          </div>
  );
}

export default HomePage;
