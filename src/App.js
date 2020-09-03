import React from 'react';
import {BottomBar} from './components/BottomBar';
import {OnePage} from './components/OnePage';
import {Shop} from './components/Shop';
import {Admin} from './components/Admin';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import './App.css';

// Import img

function App() {

  return (
    <Router>
      <div className="main">

        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
            <Route path="/adminforshop">
              <Admin />
            </Route>
            <Route exact path="/">
              <OnePage />
            </Route>
          
        </Switch>

        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
