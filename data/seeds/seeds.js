
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
  .then(() => knex('ingredients').truncate())
  .then(() => knex('recipes').truncate())
  .then(function () {
    // Inserts seed entries
    return knex('recipes').insert([
      {id: 1, name: 'meatloaf',
       instructions: `1) Place meat into a mixing bowl.
       2) Crack eggs and add to the mixing bowl.
       3) Add Breadcrumbs.
       4) Mix thoroughly.
       5)  Place in baking pan and bake for 1hr at 350 deg.`},
      {id: 2, name: 'spaghetti', instructions: `1) Bring a pot of water to a boil.
      2) Add noodles and stir frequently.
      3) Heat sause on low heat in a sauce pan.
      4) When noodles are soft throughout strain noodles in the sink.
      5) Place noodles and sauce in a pot with no heat and stir.`},
      {id: 3, name: 'ommlette', instructions: `1) Scramble eggs in a mixing bowl.
      2) Add 1tsp of butter to a frying ban and warm on medium heat.
      3)wisk initally and flip when solid.`}
    ]);
  })
  .then(() => {
    return knex('ingredients').insert([
      {id:1, ingredient_name:'meat', type:'lbs'},
      {id:2, ingredient_name:'eggs', type:'each'},
      {id:3, ingredient_name:'breadcrumbs', type:'cups'},
      {id:4, ingredient_name:'noodles', type:'oz'},
      {id:5, ingredient_name:'sauce', type:'oz'},
    ])
  })
  .then(() => {
    return knex('recipes_ingredients').insert([
      {id:1, recipe_id:1, ingredient_id:1, quantity:'2'},
      {id:2, recipe_id:1, ingredient_id:2, quantity:'2'},
      {id:3, recipe_id:1, ingredient_id:3, quantity:'1/2'},
      {id:4, recipe_id:2, ingredient_id:4, quantity:'32'},
      {id:5, recipe_id:2, ingredient_id:5, quantity:'16'},
      {id:6, recipe_id:3, ingredient_id:2, quantity:'3'}
    ])
  })
};
