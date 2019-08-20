exports.seed = async function(knex) {
  try {
    await knex.truncate('recipe_ingredients');
    await knex.truncate('ingredients');
    await knex.truncate('steps');
    await knex.truncate('recipes');
  } catch (error) {
    console.error(error);
  }
};
