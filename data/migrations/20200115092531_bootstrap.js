
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
      tbl.text('instructions').notNullable()
  })
  .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('ingredient_name').notNullable()
      tbl.string('type').notNullable()
  })
  .createTable('recipes_ingredients', tbl => {
        tbl.increments()
        
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
        tbl.string('quantity').notNullable()  

  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
