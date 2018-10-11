const bookshelf = require('./bookshelf')

const Items = bookshelf.Model.extend({
  tableName: 'items',
  hasTimestamps: true
})

module.exports = Items