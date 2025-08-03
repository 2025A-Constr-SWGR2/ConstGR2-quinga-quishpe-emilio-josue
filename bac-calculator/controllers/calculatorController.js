const { calcularAlcoholConsumido, calcularBac } = require('../utils/bacCalculator');

/**
 * Calcula y muestra el resultado del BAC
 */
async function mostrarResultadoBac(datos) {
  try {
    const alcoholConsumido = calcularAlcoholConsumido(datos.gradoAlcohol, datos.numeroBebidas);
    const resultado = calcularBac(alcoholConsumido, datos.peso, datos.horasTranscurridas, datos.genero);

    console.log(`Tu nivel estimado de alcohol en sangre (BAC) es: ${resultado.toFixed(4)}`);
  } catch (error) {
    console.error('Ocurrió un error al calcular el BAC:', error.message);
  }
}

module.exports = { mostrarResultadoBac };
