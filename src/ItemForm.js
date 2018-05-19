import React, { Component } from 'react';
import { format } from 'path';

import { connect } from 'react-redux';
import { addItem } from './actions/actions.js';


class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      weight: null,
      type: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state)
  }

  handleChange(e) {
    const target = e.target
    const value = target.value;
    const name = target.name;
    this.setState( {
      [name] : value
    }, () => {
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Name:
          <input onChange={this.handleChange} name="name" type="text"/>
        </label> 
        <label> Weight:
          <input onChange={this.handleChange} name="weight" type="text"/>
        </label>
        <label> Type:
          <select onChange={this.handleChange} name="type">
            <option value="consumable">Consumable</option>
            <option value="weapon">Weapon</option>
            <option value="armor">Armor</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item))
});

const connectedApp = connect(null, mapDispatchToProps)(ItemForm)

export default connectedApp