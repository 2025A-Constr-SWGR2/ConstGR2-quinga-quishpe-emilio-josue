// Variables constantes con nombres significativos
const FACTOR_CONVERSION_ALCOHOL = 5.14;

/**
 * Calcula el total de alcohol consumido
 */
function calcularAlcoholConsumido(gradoAlcohol, numeroBebidas) {
  const alcoholTotalConsumido = gradoAlcohol * numeroBebidas;
  return alcoholTotalConsumido;
}

/**
 * Calcula el BAC basado en los datos del usuario
 */
function calcularBac(alcoholConsumido, peso, horasTranscurridas, genero) {
  const constanteGenero = genero === 'M' ? 0.73 : 0.66;
  const bacCrudo = (alcoholConsumido * FACTOR_CONVERSION_ALCOHOL) / (peso * constanteGenero) - (0.015 * horasTranscurridas);
  return Math.max(0, bacCrudo);  // Nunca menor que 0
}


module.exports = {
  calcularAlcoholConsumido,
  calcularBac
};
