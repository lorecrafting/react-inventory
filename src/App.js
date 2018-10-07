import React, { Component } from 'react';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/inventory.db';





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  addItemToInventory = (item) => {
    addItemToFakeXHR(item)
      .then( items => {
        if (items) {
          this.setState({ items })
        }
      })
  }

  componentDidMount() {
    getItemsFromFakeXHR()
      .then( items => {
        this.setState({ items })
      }, function() {
        console.log('this.state updated', this.state)
      })
  }

  render() {

    console.log('this.state.count', this.state.count)
    return (
      <div className="App">
        <header className="App-header">
          <h1>You peek into your inventory:</h1>
        </header>
        <ItemList items={this.state.items}/>
        <ItemForm addItem={this.addItemToInventory}/>
      </div>
    )
  }
}


function ItemList(props) {
  return props.items.map( item => <Item key={item.id} name={item.name}/>)
}

function Item(props) {
  return <div >{props.name}</div>
}

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name: null,
      weight: null,
      type: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('SUBMITTED!!!!', this.state)
    this.props.addItem(this.state)
  }

  handleChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Name:
          <input onChange={this.handleChange} type="text" name="name"/>
        </label>
        <label> Weight:
          <input onChange={this.handleChange} type="text" name="weight"/>
        </label>
        <label> Type:
          <select onChange={this.handleChange} name="type">
            <option value="consumable">Consumable</option>
            <option value="weapon">Weapon</option>
            <option value="armor">Armor</option>
          </select>
        </label>
        <input type="submit"/>
      </form>
    )
  }

}






export default App;
