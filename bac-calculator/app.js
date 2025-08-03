const { mostrarResultadoBac } = require('./controllers/calculatorController');

// Datos de ejemplo (puedes cambiarlos)
const datosUsuario = {
  gradoAlcohol: 0.10,         // Grado de alcohol (por bebida)
  numeroBebidas: 4,           // Cantidad de bebidas
  peso: 70,                   // Peso en kg
  horasTranscurridas: 0,      // Horas desde que tomó alcohol
  genero: 'M'                 // M para hombre, F para mujer
};

mostrarResultadoBac(datosUsuario);
