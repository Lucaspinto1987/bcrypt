const express = require('express');
const app = express();
const usersRoutes = require('./routes/users'); // Asegúrate de que la ruta sea correcta

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Inicio de sesión</h1>
        <form action="/users/login" method="post">
          <label for="username">Usuario:</label>
          <input type="text" id="username" name="username" required><br>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" required><br>
          <button type="submit">Iniciar sesión</button>
        </form>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
