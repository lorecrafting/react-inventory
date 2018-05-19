import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR } from './db/inventory.db';
import ItemForm from './ItemForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    getItemsFromFakeXHR()
    .then( items => {
      this.setState({ items }, () => {
      })
    })
    
  }

  addItem(item) {
    addItemToFakeXHR(item)
    .then( ({ items }) => {
      this.setState({ items })
    })
  }

  // renderListOfItems() {
  //   return this.state.items.map( item => <div>{item.name}</div>)
  // }

  render() {
    const { items } = this.state

    return (
      <Router>
        <div className="App">
          <header className="App-header">
          <Link to="/"><h1 className="App-title">Character</h1></Link>
          <Link to="/inventory"><h1 className="App-title">Inventory</h1></Link>
          <Link to="/quests"><h1 className="App-title">Quests</h1></Link>
            
            
            
          </header>
          <Route exact={true} path="/" component={CharacterContainer} />
          <Route path="/inventory" component={ () => <InventoryContainer items={items} addItem={this.addItem}/>   } />
          <Route path="/quests" component={QuestContainer} />
        </div>
      </Router>
    );
  }
}



function InventoryContainer(props) {
  return (
    <div>
        <ItemsList items={props.items}/>
        <ItemForm addItem={props.addItem}/>
    </div>
  )
}

function ItemsList(props) {
  return props.items.map( item => <div key={item.id}>{item.name}</div>)
}

function CharacterContainer(props) {
  return (
    <div>CHARACTER SHEET HERE</div>
  )
}

function QuestContainer(props) {
  return (
    <div>QUESTSSSSS LOGGGGGSS HERE!!!</div>
  )
}



export default App;
