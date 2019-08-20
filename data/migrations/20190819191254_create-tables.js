exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
      table.increments();
      table
        .string('name')
        .unique()
        .notNullable();
    })

    .createTable('steps', table => {
      table.increments();
      table.string('task').notNullable();
      table
        .integer('direction_number')
        .unsigned()
        .notNullable();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id');
    })

    .createTable('ingredients', table => {
      table.increments();
      table.string('name').notNullable();
      table.float('quantity').notNullable();
    })

    .createTable('recipe_ingredients', table => {
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredients.id');
      table.primary(['recipe_id', 'ingredient_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
