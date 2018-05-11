import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR } from './db/inventory.db';
import ItemForm from './ItemForm';

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

  renderListOfItems() {
    return this.state.items.map( item => <div>{item.name}</div>)
  }

  render() {
    const { items } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">You peek into your inventory and see:</h1>
        </header>
        <ItemsList items={items}/>
        <ItemForm addItem={this.addItem}/>
      </div>
    );
  }
}

function ItemsList(props) {
  return props.items.map( item => <div>{item.name}</div>)
}


export default App;
