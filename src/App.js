import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Character from './Character.jsx'
import Quests from './Quests.jsx'
import Inventory from './Inventory.jsx'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  addItemToInventory = (item) => {
    console.log('item', item)
  }

  componentDidMount() {
    axios
      .get('/items')
      .then( items => {
        console.log("items from axios request", items)
        this.setState({items: items.data})
      })
      .catch( err => {
        console.log('err', err)
      })
  }

  render() {
    return (
     <Router>
      <div className="App">
        <header className="App-header">
          <Link className="App-title" to="/inventory">Inventory</Link>
          <Link className="App-title" to="/character">Character</Link>
          <Link className="App-title" to="/quests/123">Quests</Link>
        </header>
        <Route path="/inventory" component={ () => <Inventory items={this.state.items}/>}/>
        <Route path="/character" component={Character}/>
        <Route path="/quests/:id" component={Quests}/>
      </div>
     </Router>
    )
  }
}

export default App;
