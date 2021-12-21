POTLUCK BACKEND

Deployed URL: https://potluckplanner06.herokuapp.com/

API Endpoints

-----LOGIN and REGISTER-----
[POST]/api/auth/register -- creates a new user
WHAT TO SEND
{
  "username": "string",
  "password": "string"
}
WHAT YOU GET BACK
{
  "username": "string",
  "user_id": "integer"
}
[POST] /api/auth/login -- logs in an existing user
WHAT TO SEND
{
  "username": "string",
  "password": "string"
}
WHAT YOU GET BACK
{
  "message": "Welcome back username",
  "user_id": "integer",
  "username": "username",
  "token": "TOKEN"
}
-----USERS-----
[GET] /api/users -- gets list of users
WHAT YOU GET BACK
[
  {
    "user_id": 1,
    "username": "ABC"
  },
  {
    "user_id": 2,
    "username": "BCD"
  },
  {
    "user_id": 3,
    "username": "CDF"
  }
]
[GET] /api/users/:id -- gets user by ID
WHAT YOU GET BACK
{
  "user_id": 1,
  "username": "ABC"
}
[GET] /api/users/:id/potlucks -- gets all the potlucks a user has been invited to
WHAT YOU GET BACK
{
  "user_id": "8",
  "username": "U-God",
  "potlucks": [
    {
      "attending": 1,
      "potluck_id": 3,
      "potluck_name": "Healthy Food",
      "organizer": "ABC",
      "potluck_description": "Fruits, Salad, Proteins",
      "potluck_date": "2021/09/15",
      "potluck_time": "07:00:00",
      "potluck_location": "1234 Park Ave, Raleign NC"
    },
    {
      "attending": 1,
      "potluck_id": 2,
      "potluck_name": "Food Time",
      "organizer": "BCD",
      "potluck_description": "Cake, Cookies, Tarts, IceCream",
      "potluck_date": "2021/04/19",
      "potluck_time": "02:00:00",
      "potluck_location": "1111 5th Ave, New York NY"
    }
  ]
}
[GET] /api/users/:organizer_id/organizer_potlucks -- gets all the potlucks a user has created
WHAT YOU GET BACK
[
    {
        "potluck_id": 1,
        "potluck_name": "Healthy Food",
        "organizer": 3,
        "details": {
            "potluck_description": "bring the tastiest food pls.  NO BAD FOOD",
            "potluck_date": "2021-07-15T06:00:00.000Z",
            "potluck_time": "06:00:00",
            "potluck_location": "1403 Park Ave, Long Beach CA"
        }
    },
    {
        "potluck_id": 5,
        "potluck_name": "36 chambers",
        "organizer": 3,
        "details": {
            "potluck_description": "Light Summer Food",
            "potluck_date": "2021-07-28T06:00:00.000Z",
            "potluck_time": "12:00:00",
            "potluck_location": "49 S 2222 E, Long Beach CA"
        }
    }
]
[PUT] /api/users/:id -- edit existing user
WHAT TO SEND
{
    "username": "string",
    "password": "string"
}
WHAT YOU GET BACK
{
    "user_id": 1,
    "username": "ABC"
}
-----POTLUCKS-----
[GET] /api/potlucks -- get an array of potlucks
WHAT YOU GET BACK
[
    {
          "potluck_id": 1,
          potluck_name: 'Healthy Food',
          organizer: '3',
          potluck_description: 'Fruits, Salad, Proteins',
          potluck_date: '2021/09/15',
          potluck_time: '07:00:00',
          potluck_location: '1234 Park Ave, Raleign NC'
    },
    {
          "potluck_id": 2,
          potluck_name: 'Food Time',
          organizer: '1',
          potluck_description: 'Cake, Cookies, Tarts, IceCream',
          potluck_date: '2021/04/19',
          potluck_time: '02:00:00',
          potluck_location: '1111 5th Ave, New York NY'
    },
    {
          "potluck_id": 3,
          potluck_name: 'DD..Food',
          organizer: '5',
          potluck_description: 'Light Summer Food',
          potluck_date: '2021/12/28',
          potluck_time: '07:30:00',
          potluck_location: '49 S 2222 E, Long Beach CA'
    }
]
[GET] /api/potlucks/:id -- gets potluck by ID
WHAT YOU GET BACK
{
    "potluck_id": 3,
    "potluck_name": "DD..FOOD",
    "details": {
        "organizer": "EFG",
        "potluck_description": "Ligh summer Food",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "49 S 2222 E, Long Beach CA"
    }
}
[GET] /api/potlucks/:id/users -- gets the users for a specific potluck
WHAT YOU GET BACK
{
    "potluck_id": 2,
    "potluck_name": "Food Time",
    "details": {
        "organizer": 1,
        "potluck_description": "Fruits, Salad, Proteins",
        "potluck_date": "2021-08-20T06:00:00.000Z",
        "potluck_time": "05:00:00",
        "potluck_location": "1234 E 2345 S, SLC UT"
    },
    "users": [
        {
            "user_id": 4,
            "username": "DEF",
            "attending": "attending"
        },
        {
            "user_id": 3,
            "username": "CDE",
            "attending": "not attending"
        }
    ]
}
[GET] /api/potlucks/:id/foods -- gets the foods for a specific potluck
WHAT YOU GET BACK
{
    "potluck_id": 3,
    "foods": [
        {
            "food_id": 1,
            "food_name": "Mushroom Cream Soup",
            "food_description": "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions"
        },
        {
            "food_id": 2,
            "food_name": "Vegan Hummus Mezze",
            "food_description": "An assortment of $ hummus plates: plain, with avacado, with paprika and with truffle oil. Vegan friendly"
        },
        {
            "food_id": 6,
            "food_name": "Pizza",
            "food_description": "Fresh mozzarella, special home-made salami, tomato, sauce, greens"
        }
    ]
}
[POST] /api/potlucks/:id/users -- adds a user to a potluck
WHAT TO SEND
{
   "potluck_id": 2,
   "user_id": 8,
   "attending": 1 //0 for not attending, 1 for attending
}
WHAT YOU GET BACK
{
    "potluck_id": 2,
    "potluck_name": "Food Time",
    "details": {
        "organizer": 1,
        "potluck_description": "Fruits, Salad, Proteins",
        "potluck_date": "2021-08-20T06:00:00.000Z",
        "potluck_time": "05:00:00",
        "potluck_location": "1234 E 2345 S, SLC NY"
    },
    "users": [
        {
            "user_id": 4,
            "username": "DEF",
            "attending": "attending"
        },
        {
            "user_id": 3,
            "username": "CDE",
            "attending": "not attending"
        },
        {
            "user_id": 8,
            "username": "JKL",
            "attending": "attending"
        }
    ]
}
[POST] /api/potlucks/:id/foods -- adds a food item to a potluck
WHAT TO SEND
{
    "potluck_id": 3,
    "food_id": 2
}
WHAT YOU GET BACK
{
    "potluck_id": 3,
    "foods": [
        {
            "food_id": 1,
            "food_name": "Mushroom Cream Soup",
            "food_description": "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
            "potluck_food_id": 4
        },
        {
            "food_id": 2,
            "food_name": "Vegan Hummus Mezze",
            "food_description": "An assortment of $ hummus plates: plain, with avacado, with paprika and with truffle oil. Vegan friendly",
            "potluck_food_id": 18
        },
        {
            "food_id": 5,
            "food_name": "Roasted Chicken",
            "food_description": "Tenderly roasted chicken, mouthwatering oven-baked potates with rosemary",
            "potluck_food_id": 20
        }
    ]
}
[POST] /api/potlucks -- creates a new potluck
WHAT TO SEND
{
    "potluck_name": "string",
    "potluck_description": "optional string",
    "potluck_date": "2021-07-28  must be this format",
    "potluck_time": "12:00:00 must be this format",
    "potluck_location": "string",
    "organizer": "integer"

}
WHAT YOU GET BACK
{
    "potluck_id": 3,
    "potluck_name": "BB..FOOD",
    "details": {
        "organizer": "ABC",
        "potluck_description": "Healthy Food",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "4598 S 5th Ave, New York NY"
    }
}
[PUT] /api/potlucks/:id -- updates an existing potluck
WHAT TO SEND
{
    "potluck_name": "string",
    "potluck_description": "optional string",
    "potluck_date": "2021-07-28  must be this format",
    "potluck_time": "12:00:00 must be this format",
    "potluck_location": "string",
    "organizer": "integer"

}
WHAT YOU GET BACK
{
    "potluck_id": 3,
    "potluck_name": "BB..FOOD",
    "details": {
        "organizer": "ABC",
        "potluck_description": "Fruits, Salad, Proteins",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "45 S 5th Ave, New York NY"
    }
}
[DELETE] /api/potlucks/:id -- delete existing potluck
WHAT YOU GET BACK
{
    "potluck_id": 3,
    "potluck_name": "FOOD--plaza",
    "details": {
        "organizer": "EFG",
        "potluck_description": "Light Summer Food",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "45 S 5th Ave, New York NY"
    }
}
[DELETE] /api/potlucks/:potluck_food_id/foods -- delete existing food item in a potluck
WHAT YOU GET BACK
"successfully removed item"
-----FOODS-----
[GET] /api/foods -- get an array of all foods
WHAT YOU GET BACK
[
    {
        "food_id": 1,
        "food_name": "Mushroom Cream Soup",
        "food_description": "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions"
    },
    {
        "food_id": 2,
        "food_name": "Vegan Hummus Mezze",
        "food_description": "An assortment of $ hummus plates: plain, with avacado, with paprika and with truffle oil. Vegan friendly"
    },
    {
        "food_id": 3,
        "food_name": "Pizza",
        "food_description": "Fresh mozzarella, special home-made salami, tomato, sauce, greens"
    }
]
[GET] /api/foods/:id -- gets food by ID
WHAT YOU GET BACK
{
    "food_id": 1,
    "food_name": "Zesty Salmon Filet",
    "food_description": "Oven-baked salmon filet served with garlic-infused citrusy sauce"
}
[POST] /api/foods -- create new food item
WHAT TO SEND
{
    "food_name": "Quesadilla",
    "food_description": " optional string"
}
WHAT YOU GET BACK
{
    "food_id": 8,
    "food_name": "Quesadilla",
    "food_description": "no description yet"
}
[PUT] /api/foods/:id -- update existing food item
WHAT TO SEND
{
    "food_name": "Fajitas",
    "food_description": " optional string"
}
WHAT YOU GET BACK
{
    "food_id": 8,
    "food_name": "Fajitas",
    "food_description": "no description yet"
}
[DELETE] /api/foods/:id -- delete existing food item
WHAT YOU GET BACK
{
    "food_id": 8,
    "food_name": "Fish",
    "food_description": "no description yet"
}

