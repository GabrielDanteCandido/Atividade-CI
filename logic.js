
/**
 * Valida se a nota está entre 0 e 10.
 * @param {number|string} nota - A nota a ser validada.
 * @returns {boolean} - True se a nota é válida, false caso contrário.
 */
function validarNota(nota) {
    const n = parseFloat(nota);
    return !isNaN(n) && n >= 0 && n <= 10;
}

/**
 * Calcula a média de duas notas.
 * @param {number} nota1 - A primeira nota.
 * @param {number} nota2 - A segunda nota.
 * @returns {number} - A média das duas notas.
 */
function calcularMedia(nota1, nota2) {
    return (parseFloat(nota1) + parseFloat(nota2)) / 2;
}

/**
 * Determina a situação do aluno com base na média.
 * Média menor que 5: Reprovado
 * Média entre 5 e menor que 7: Recuperação
 * Média 7 ou superior: Aprovado
 * @param {number} media - A média do aluno.
 * @returns {string} - A situação do aluno ("Reprovado", "Recuperação", "Aprovado").
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

// Para compatibilidade com Node.js/Jest (testes) e o navegador
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validarNota, calcularMedia, determinarSituacao };
}