
# 🧪 Calculadora de BAC (Tasa de Alcohol en Sangre) - Node.js

Este proyecto es una calculadora desarrollada en Node.js que estima la concentración de alcohol en sangre (BAC, por sus siglas en inglés) con base en parámetros como el peso corporal, el número de bebidas consumidas, el grado alcohólico, el tiempo transcurrido y el género.

---

## 🚀 Requisitos

- Node.js ≥ v14
- Editor de código (recomendado: VSCode)

---

## ▶️ Ejecución

```bash
# Clona el repositorio
git clone <url-del-repo>

# Accede a la carpeta del proyecto
cd bac-calculator

# Ejecuta el programa
node app.js
```

---

## 🧠 Lógica del cálculo

El cálculo se basa en la fórmula:

```plaintext
BAC = ((A × 5.14) / (W × r)) - 0.015 × H
```

Donde:

- **A**: cantidad total de alcohol en onzas (grados de alcohol × número de bebidas)
- **W**: peso corporal en kilogramos
- **r**: constante de distribución de alcohol (0.73 para hombres, 0.66 para mujeres)
- **H**: número de horas transcurridas desde que se bebió

---

## 📂 Estructura del Proyecto

```
bac-calculator/
├── controllers/
│   └── calculatorController.js   # Controlador que orquesta el cálculo
├── utils/
│   └── bacCalculator.js          # Módulo con la lógica del cálculo
├── app.js                        # Punto de entrada
└── README.md                     # Documentación del proyecto
```

---

## ✅ Principios de Clean Code aplicados

A continuación se detallan los principios de Clean Code aplicados y los archivos donde se reflejan:

| Categoría         | Principio aplicado                                                                 | Archivo(s)                        | Descripción                                                                 |
|-------------------|-------------------------------------------------------------------------------------|-----------------------------------|-----------------------------------------------------------------------------|
| **Variables**      | Nombres significativos y pronunciables                                             | `bacCalculator.js`                | Se usaron nombres como `alcoholTotalConsumido`, `constanteGenero`.         |
|                   | Variables explicativas y evitación del mapeo mental                                | `bacCalculator.js`                | Se evitó usar letras como `r`, `a`, `b` y se prefirió nombres autoexplicativos. |
|                   | Uso de constantes para valores mágicos                                             | `bacCalculator.js`                | `FACTOR_CONVERSION_ALCOHOL = 5.14`                                         |
| **Funciones**      | Una función = una responsabilidad                                                  | `bacCalculator.js`, `calculatorController.js` | Separación clara entre cálculo, impresión y manejo de datos.                |
|                   | Cantidad limitada de argumentos mediante destructuración                           | `calculatorController.js`         | Uso de un objeto `datos` para agrupar parámetros.                          |
|                   | Nombres de funciones que indican su propósito                                       | `calculatorController.js`         | `mostrarResultadoBac()` y `calcularAlcoholConsumido()`                    |
|                   | Evitar efectos secundarios                                                          | `bacCalculator.js`                | Las funciones retornan nuevos valores sin alterar el estado externo.       |
| **Organización**   | Separación de responsabilidades por archivo (SRP - principio SOLID)               | Todo el proyecto                  | `app.js` ejecuta, `controller` coordina, `utils` calcula.                 |
|                   | Eliminar código muerto y evitar comentarios innecesarios                           | Todos                             | El código es autoexplicativo, no contiene comentarios redundantes.         |
| **Errores**        | Manejo correcto de errores                                                         | `calculatorController.js`         | Uso de `try/catch` y `console.error` para capturar errores.                |
| **Formato**        | Capitalización y formato consistente                                               | Todos                             | Uso consistente de `camelCase`, identación y espaciado limpio.             |

---

## 📌 Ejemplo de uso

```javascript
// app.js

const datosUsuario = {
  gradoAlcohol: 0.05,
  numeroBebidas: 4,
  peso: 70,
  horasTranscurridas: 2,
  genero: 'M'
};

mostrarResultadoBac(datosUsuario);
```

```
✅ Resultado: Tu nivel estimado de alcohol en sangre (BAC) es: 0.0457
```

---

## 🧑 Autores

**Alexander Motoche**  
**Pablo Maldonado**  
**Emilio Quinga**  
Estudiantes de Ingeniería de Software  
Construcción y evolución del Software - Aplicación de principios de Clean Code

---

