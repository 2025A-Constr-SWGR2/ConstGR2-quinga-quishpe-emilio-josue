exports.multiplicacion = (numeroUno, numeroDos) => {
    const num1 = Number(numeroUno);
    const num2 = Number(numeroDos);

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Ambos valores deben ser números');
    }

    return num1 * num2;
};
