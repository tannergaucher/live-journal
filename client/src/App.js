import React, { Component } from 'react';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import CreatePaper from './components/CreatePaper';
import StatusIcons from './components/StatusIcons';

class App extends Component {
  
  state = {
    active: false,
  }
  
  render() {
        
    return (
      <div className="App">
        <MenuAppBar/>
        <CreatePaper/>
        <StatusIcons
          active={this.state.active}
        />
      </div>
    );
  }
}

export default App;
