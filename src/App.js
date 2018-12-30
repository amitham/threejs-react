import React, { Component } from 'react';
import './App.css';

import HOC from './HOC/Hoc';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Example01 from './Components/Example01/Example01';

class App extends Component {
  render() {
    return (
      <HOC>
        <div className="container-fluid">
          <div className="row">

            <Header />
            <Navigation />
            <Example01 />
            
          </div>
        </div>

      </HOC >
    );
  }
}

export default App;
