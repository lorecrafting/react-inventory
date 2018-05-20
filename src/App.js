import React, { Component } from 'react';
import './App.css';
// import { getItemsFromFakeXHR, addItemToFakeXHR } from './db/inventory.db';
import { getAllItems } from './actions/actions.js'
import ItemForm from './ItemForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    // this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    // getItemsFromFakeXHR()
    // .then( items => {
    //   this.setState({ items }, () => {
    //   })
    // })
    this.props.getAllItems()

  }

  // addItem(item) {
  // //   addItemToFakeXHR(item)
  // //   .then( ({ items }) => {
  // //     this.setState({ items })
  // //   })
  // // }

  render() {
    const { items } = this.props

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/"><h1 className="App-title">Character</h1></Link>
            <Link to="/inventory"><h1 className="App-title">Inventory</h1></Link>
            <Link to="/quests"><h1 className="App-title">Quests</h1></Link>
          </header>

          <Route path="/" component={CharacterContainer} />
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
        {/* <ItemForm addItem={props.addItem}/> */}
        <ItemForm />
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

const mapStateToProps = storeState => ({ items: storeState})

// const mapDispatchToProps = dispatch => ({
//   getAllItems: () => dispatch(getAllItems())
// });

const ConnectedApp = connect(mapStateToProps, { getAllItems })(App);

export default ConnectedApp;
