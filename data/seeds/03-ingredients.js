exports.seed = function(knex) {
  return knex('ingredients').insert([
    { name: 'cherries', quantity: 20 },
    { name: 'poundcake', quantity: 1 },
    { name: 'whip cream', quantity: 20 },
    { name: 'lbs of pineapple', quantity: 0.8 },
    { name: 'teaspoons of beef', quantity: 1.4 }
  ]);
};
