import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from './shopform';
import Display from './display';
import Nav from './nav.js';
import Sidenav from './sidenav.js';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  const [search, setsearch] = useState(' ');
  const searching = (value) => {
    setsearch(value);
  }
  return (
    <Router>
      <div className="App" style={{ overflow: 'hidden' }}>
        <Nav data={
          {
            element: search,
            searchwith: searching
          }
        } />
        <div className="cont" style={{ display: "flex" }}>
          <Sidenav style={{ flex: 1 }} />
          <div className="cont" style={{ width: '100%', height: '85vh', overflowX: 'hidden' }} >
            <Route path="/form" component={Form} />

            <Route path="/display" component={  ()=> <Display data={{ sfor: search }} /> } />
              
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
