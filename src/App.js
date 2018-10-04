import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/inventory.db';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello World</h1>
        </header>
      </div>
    );
  }
}

export default App;
