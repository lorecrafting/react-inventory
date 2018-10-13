import React from 'react';
import Item from './Item.jsx'
import ItemForm from './ItemForm.jsx'


const Inventory = (props) => {
  return (
    <>
      {props.items.map( item => <Item key={item.id} name={item.name}/>)}
      <ItemForm/>
    </>
  )
}

export default Inventory