import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ViewResume from './pages/ViewResume';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewResume/>
      </div>
    );
  }
}

export default App;
