const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    username: 'user1',
    password: bcrypt.hashSync('password1', 10), 
    name: 'User One',
  },
  {
    id: 2,
    username: 'user2',
    password: bcrypt.hashSync('password2', 10), 
    name: 'User Two',
  },
  { 
  id: 3,
  username: 'user3',
  password: bcrypt.hashSync('password3', 10), 
  name: 'User Three',
},
];

module.exports = users;
