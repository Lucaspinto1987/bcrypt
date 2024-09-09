const jwt = require('jsonwebtoken');
const { secret } = require('../crypto/config');

function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send('Token no proporcionado.');
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send('Token inválido.');
    }
    req.user = decoded;
    next();
  });
}

module.exports = authMiddleware;
