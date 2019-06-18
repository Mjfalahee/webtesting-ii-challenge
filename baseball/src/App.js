import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard';

class App extends React.Component {
  state = {
    header: 'Baseball',
    h2: "Let's Play"
  }
  render() {
      return (
        <div className="App">
          <header className="App-header">
              {this.state.header}
          </header>
          <div>
           <h2>Let's Play</h2>
           <Dashboard /> 
          </div>
        </div>
      );
  }
}

export default App;
