
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'A Mana Potion', weight: 1, type: 'consumable'},
        {name: 'Staff of Light', weight: 3, type: 'weapon'},
        {name: 'Shroud of the Pantheon', weight: 10, type: 'armor'}
      ]);
    });
};
