const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secret } = require('../crypto/config'); // Asegúrate de importar el secreto correctamente
const router = express.Router();

// Aquí está el endpoint de login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Aquí debes obtener el usuario desde tu base de datos o archivo
  // Supongamos que tienes un usuario de prueba:
  const user = {
    username: 'user',
    password: 'Lucas2013*' // Reemplaza esto con una contraseña hasheada real
  };

  if (username === user.username && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username }, secret, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Usuario o contraseña incorrectos');
  }
});

module.exports = router;
