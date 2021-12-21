exports.seed = function(knex) {
  return knex('potlucks').del()
    .then(function () {
      return knex('potlucks').insert([
        {
          potluck_name: 'Healthy Food',
          organizer: '3',
          potluck_description: 'Fruits, Salad, Proteins',
          potluck_date: '2021/09/15',
          potluck_time: '07:00:00',
          potluck_location: '1234 Park Ave, Raleign NC'
        },
        {
          potluck_name: 'Food Time',
          organizer: '1',
          potluck_description: 'Cake, Cookies, Tarts, IceCream',
          potluck_date: '2021/04/19',
          potluck_time: '02:00:00',
          potluck_location: '1111 5th Ave, New York NY'
        },
        {
          potluck_name: 'DD..Food',
          organizer: '5',
          potluck_description: 'Light Summer Food',
          potluck_date: '2021/12/28',
          potluck_time: '07:30:00',
          potluck_location: '49 S 2222 E, Long Beach CA'
        },
      ])
    })
}
