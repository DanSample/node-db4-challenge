exports.seed = function(knex) {
  return knex('steps').insert([
    { task: 'gather ingredients', direction_number: 1, recipe_id: 1 },
    { task: 'chop cherries', direction_number: 2, recipe_id: 1 },
    { task: 'cook pie for 50 minutes', direction_number: 3, recipe_id: 1 },
    {
      task: 'chop pineapple into small pieces',
      direction_number: 1,
      recipe_id: 2
    },
    { task: 'put pineapple in a cake', direction_number: 2, recipe_id: 2 }
  ]);
};
