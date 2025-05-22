// logic.test.js
const { validarNota, calcularMedia, determinarSituacao } = require('./logic');

describe('Validação de Notas [cite: 7]', () => {
    test('deve retornar true para notas válidas (0, 5, 10)', () => {
        expect(validarNota(0)).toBe(true);
        expect(validarNota(5.5)).toBe(true);
        expect(validarNota(10)).toBe(true);
    });

    test('deve retornar false para notas inválidas (<0, >10, não numérico)', () => {
        expect(validarNota(-1)).toBe(false);
        expect(validarNota(10.1)).toBe(false);
        expect(validarNota('abc')).toBe(false);
        expect(validarNota(null)).toBe(false);
        expect(validarNota(undefined)).toBe(false);
    });
});

describe('Cálculo da Média [cite: 7]', () => {
    test('deve calcular a média corretamente', () => {
        expect(calcularMedia(6, 8)).toBe(7);
        expect(calcularMedia(0, 10)).toBe(5);
        expect(calcularMedia(5, 5)).toBe(5);
        expect(calcularMedia(4.5, 5.5)).toBe(5);
        expect(calcularMedia(7.3, 8.7)).toBe(8);
    });
});

describe('Determinação da Situação do Aluno [cite: 7]', () => {
    test('deve retornar "Reprovado" para média < 5', () => {
        expect(determinarSituacao(4.9)).toBe("Reprovado");
        expect(determinarSituacao(0)).toBe("Reprovado");
    });

    test('deve retornar "Recuperação" para média >= 5 e < 7', () => {
        expect(determinarSituacao(5)).toBe("Recuperação");
        expect(determinarSituacao(6.99)).toBe("Recuperação");
    });

    test('deve retornar "Aprovado" para média >= 7', () => {
        expect(determinarSituacao(7)).toBe("Aprovado");
        expect(determinarSituacao(10)).toBe("Aprovado");
    });
});