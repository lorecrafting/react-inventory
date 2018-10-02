let itemsFromFakeDB = [{
    id: 1,
    name: 'A Large Healing Potion',
    weight: 0.1,
    type: 'consumable'
  },
  {
    id: 2,
    name: 'Wirts Leg',
    weight: 10,
    type: 'weapon'
  },
  {
    id: 3,
    name: 'Dreamwalker Spaulders',
    weight: 2,
    type: 'armor'
  }
]

let newId = 4

export const getItemsFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout( () => {
    resolve(itemsFromFakeDB.slice())
  }, 500)
})

export const addItemToFakeXHR = (item) => new Promise((resolve, reject) => {
  setTimeout( () => {
    item.id = newId;
    newId++;
    itemsFromFakeDB.push(item);
    console.log('itemFromFakeDB', itemsFromFakeDB)
    resolve(itemsFromFakeDB)
  },500)
})

export const getItemByIdFromFakeXHR = (itemId) => new Promise( (resolve, reject) => {
  setTimeout( () => {
    const itemResponse = itemsFromFakeDB.find( item => item.id === itemId);
    if (itemResponse) resolve(itemResponse);
    else reject({status: 404, message: 'item not found'})
  }, 500)
})

export const deleteItemById = (itemId) => new Promise ( (resolve, reject) => {
  setTimeout( () => {
    const itemIdx = itemsFromFakeDB.findIndex( item => item.id === itemId);
    if (itemIdx === -1) {
      reject({status: 500, message: 'item not found'})
    } else {
      itemsFromFakeDB = itemsFromFakeDB.filter( item => {
        return item.id !== itemId
      })
      console.log('itemsFromFakeDB', itemsFromFakeDB)
      console.log('itemIdx', itemIdx)
      resolve({status: 'ok'})
    }
  })
})