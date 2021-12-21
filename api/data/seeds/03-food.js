exports.seed = function(knex) {
  return knex('foods').del()
    .then(function () {
      return knex('foods').insert([
        {
          food_name: 'Mushroom Cream Soup', 
          food_description: 'A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions'
        },
        {
          food_name: 'Vegan Hummus Mezze', 
          food_description: 'An assortment of $ hummus plates: plain, with avacado, with paprika and with truffle oil. Vegan friendly'
        },
        {
          food_name: 'Zesty Salmon Filet', 
          food_description: 'Oven-baked salmon filet served with garlic-infused citrusy sauce'
        },
        {
          food_name: 'Roasted Chicken', 
          food_description: 'Tenderly roasted chicken, mouthwatering oven-baked potates with rosemary'
        },
        {
          food_name: 'Pizza', 
          food_description: 'Fresh mozzarella, special home-made salami, tomato, sauce, greens'
        },
        {
          food_name: 'Double Trouble', 
          food_description: '2 juicy beef patties flamed in whisky and wrapped in warm bread, crisp lettuce with a dash of sriracha sauce'
        },
      ])
    })
}
