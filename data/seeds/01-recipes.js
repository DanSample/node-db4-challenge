exports.seed = function(knex) {
  return knex('recipes').insert([
    { name: "Mom's Cherry Pie" },
    { name: 'Pineapple Upside-down Cake' },
    { name: "Shepard's Pie" },
    { name: 'Mac & Cheese' }
  ]);
};
