const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

module.exports = {
    find,
    findShoppingList,
    findInstructions
}

function find() {
    return db('recipes')
}

function findShoppingList(id) {
    return db('recipes_ingredients')
    .join('recipes', 'recipes.id', 'recipe_id')
    .join('ingredients', 'ingredients.id', 'ingredient_id')
    .select('ingredients.ingredient_name', 'ingredients.type', 'recipes_ingredients.quantity')
    .where('recipes.id', id)
}

function findInstructions(id) {
    return db('recipes')
    .select('recipes.name','recipes.instructions')
    .where('id',id)
}