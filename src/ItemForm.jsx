import React, { Component } from 'react';
import { addItem } from './actions/actions.js';
import { connect } from 'react-redux';

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      weight: null,
      type: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('SUBMITTED!!!!', this.state);
    this.props.dispatch(addItem(this.state));
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

export default connect()(ItemForm)