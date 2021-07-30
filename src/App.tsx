import React from 'react';
import Users from './components/users/Users'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/App.css';

function App() {
  return (
    <div data-testid="app" className="App">
      <div className="app-header">
        <h4>React Context Api using Typescript & Json placeholder</h4>
      </div>
       <Users/>
      <footer>
        This project is designed & developed with &#10084; by <a href="https://github.com/supatechie">Peter Kelvin Torver</a>
      </footer>
    </div>
  );
}

export default App;
