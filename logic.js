
/**
 * 
 * @param {number|string} nota 
 * @returns {boolean}
 */
function validarNota(nota) {
    const n = parseFloat(nota);
    return !isNaN(n) && n >= 0 && n <= 10;
}

/**
 * 
 * @param {number} nota1 
 * @param {number} nota2
 * @returns {number} 
 */
function calcularMedia(nota1, nota2) {
    return (parseFloat(nota1) + parseFloat(nota2)) / 2;
}

/**
 * 
 * @param {number} media 
 * @returns {string} 
 */
function determinarSituacao(media) {
    if (media < 5) {
        return "Reprovado";
    } else if (media >= 5 && media < 7) {
        return "Recuperação";
    } else {
        return "Aprovado";
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validarNota, calcularMedia, determinarSituacao };
}