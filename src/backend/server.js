const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos MySQL
const conexion = mysql.createConnection({
  host: "localhost",
  database: "autolavado",
  user: "root",
  password: "",
});

conexion.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos:", error);
    return;
  } else {
    console.log("Conexión a la base de datos exitosa");
  }
});

// Ruta para manejar el login
app.post("/login", (req, res) => {
  const { nombre, password } = req.body;
  console.log("Datos recibidos:", { nombre, password });

  const sql = "SELECT contrasena FROM usuarios WHERE nombre = ?";
  conexion.query(sql, [nombre], (error, results) => {
    if (error) {
      console.error("Error en la consulta:", error);
      return res.status(500).json({ message: "Error en la base de datos" });
    }

    if (results.length > 0) {
      const hashedPassword = results[0].contrasena;
      if (bcrypt.compareSync(password, hashedPassword)) {
        res.status(200).json({ message: "Inicio de sesión exitoso", user: nombre });
      } else {
        res.status(401).json({ message: "Contraseña incorrecta" });
      }
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  });
});

// Ruta para manejar el registro
app.post("/register", (req, res) => {
  const { nombre, password } = req.body;
  console.log("Datos de registro recibidos:", { nombre, password });

  // Verificar si el usuario ya existe
  const checkUserSql = "SELECT nombre FROM usuarios WHERE nombre = ?";
  conexion.query(checkUserSql, [nombre], (error, results) => {
    if (error) {
      console.error("Error en la consulta de verificación de usuario:", error);
      return res.status(500).json({ message: "Error en la base de datos" });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Si el usuario no existe, proceder con el registro
    const hashedPassword = bcrypt.hashSync(password, 10);
    const insertUserSql = "INSERT INTO usuarios (nombre, contrasena) VALUES (?, ?)";
    conexion.query(insertUserSql, [nombre, hashedPassword], (error, results) => {
      if (error) {
        console.error("Error en la consulta de inserción de usuario:", error);
        return res.status(500).json({ message: "Error en la base de datos" });
      }

      res.status(201).json({ message: "Usuario registrado exitosamente" });
    });
  });
});

app.post('/api/citas', (req, res) => {
  const { marca, modelo, matricula, tipo_vehiculo, tipo_lavado, fecha, hora, sugerencias } = req.body;

  if (!marca || !modelo || !matricula || !tipo_vehiculo || !tipo_lavado || !fecha || !hora) {
    return res.status(400).json({ message: 'Faltan datos obligatorios para agendar la cita' });
  }

  const sql = "INSERT INTO citas (marca, modelo, matricula, tipo_vehiculo, tipo_lavado, fecha, hora, sugerencias) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  
  conexion.query(sql, [marca, modelo, matricula, tipo_vehiculo, tipo_lavado, fecha, hora, sugerencias], (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send('Error al agendar la cita');
      } else {
          res.status(200).send('Cita agendada correctamente');
      }
  });
});

app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});