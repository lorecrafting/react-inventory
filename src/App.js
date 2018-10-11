import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/inventory.db';
import axios from 'axios';


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
    // getItemsFromFakeXHR()
    //   .then( items => {
    //     this.setState({ items })
    //   }, function() {
    //     console.log('this.state updated', this.state)
    //   })
    axios
      .get('/items')
      .then( items => {
        console.log("items", items)
        this.setState({items: items.data})
      })
      .catch( err => {
        console.log('err', err)
      })
  }

  renderItemList() {
    if (this.state.hasItems) {
      return <ItemList items={this.state.items}/>
    } else {
      return null
    }
  }


  render() {

    console.log('this.state.count', this.state.count)
    return (
     <Router>
      <div className="App">
        <header className="App-header">
          <Link className="App-title" to="/inventory">Inventory</Link>
          <Link className="App-title" to="/character">Character</Link>
          <Link className="App-title" to="/quests/123">Quests</Link>
        </header>
        <Route path="/inventory" component={ () => <ItemList items={this.state.items}/>}/>
        <Route path="/character" component={Character}/>
        <Route path="/quests/:id" component={Quests}/>
      </div>
     </Router>
    )
  }
}


function Character(props) {
  return <div>MY FAKE CHARACTER COMPONENT HERE</div>
}

function Quests(props) {
  console.log('props', props)
  return <div>MY FAKE QUEST COMPONENT HERE</div>
}

function ItemList(props) {
  
  return props.items.map( item => <Item key={item.id} name={item.name}/>)
}
function Item(props) {
  console.log('props', props)
  function navigateTo() {
    
  }
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
