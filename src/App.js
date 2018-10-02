import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/inventory.db';
import ItemForm from './ItemForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this);
    this.updateStateFromDb = this.updateStateFromDb.bind(this);
    this.deleteItemById= this.deleteItemById.bind(this);
  }

  componentDidMount() {
    this.updateStateFromDb()
  }

  updateStateFromDb() {
    getItemsFromFakeXHR()
      .then( items => {
        this.setState({items}, () => {
          console.log('this.state', this.state)
        })
      })
  }

  addItem(item) {
    addItemToFakeXHR(item)
    .then( items => {
      this.setState( {items })
    })
  }

  deleteItemById(itemId) {
    console.log('BALETED')
    deleteItemByIdFromFakeXHR(itemId)
    .then( result => {
      this.updateStateFromDb()
    })
  }

  render() {
    const { items } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">You peek into your inventory and see:</h1>
        </header>
        <ItemsList deleteItemById={this.deleteItemByIdFrom} items={items}/>
        <ItemForm addItem={this.addItem}/>
      </div>
    );
  }
}

function ItemsList(props) {
  return props.items.map( item => <div onClick={ () => props.deleteItemById(item.id)}>{item.name}</div>)
}


export default App;
