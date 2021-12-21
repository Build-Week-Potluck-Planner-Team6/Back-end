exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          username: 'ABC',
          password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'//password = 1111
        },
        {
          username: 'BCD',
          password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'//password = 1111
        },
        {
          username: 'CDE',
          password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'//password = 1111
        },
        {
          username: 'DEF',
          password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'//password = 1111
        },
        {
          username: 'EFG',
          password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'//password = 1111
        },
        {
          username: 'FGH',
          password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'//password = 1111
        },
        {
          username: 'GHI',
          password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'//password = 1111
        },
        {
          username: 'HIJ',
          password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'//password = 1111
        },
        {
          username: 'IJK',
          password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'//password = 1111
        },
        {
          username: 'JKL',
          password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'//password = 1111
        }
      ])
    })
}