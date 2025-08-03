exports.division = (numeroUno, numeroDos) => {
    const num1 = Number(numeroUno);
    const num2 = Number(numeroDos);

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Ambos valores deben ser números');
    }

    if (num2 === 0) {
        throw new Error('No se puede dividir para cero');
    }

    return num1 / num2;
};
