// app.js
document.addEventListener('DOMContentLoaded', () => {
    const nomeAlunoInput = document.getElementById('nomeAluno');
    const nota1Input = document.getElementById('nota1');
    const nota2Input = document.getElementById('nota2');
    const btnCalcular = document.getElementById('btnCalcular');
    
    const resultadoArea = document.getElementById('resultadoArea');
    const nomeAlunoResultado = document.getElementById('nomeAlunoResultado');
    const mediaFinalSpan = document.getElementById('mediaFinal');
    const situacaoFinalSpan = document.getElementById('situacaoFinal');
    
    const errorNota1Span = document.getElementById('errorNota1');
    const errorNota2Span = document.getElementById('errorNota2');
    const mensagemErroGeralDiv = document.getElementById('mensagemErroGeral');

    btnCalcular.addEventListener('click', () => {
        
        errorNota1Span.textContent = '';
        errorNota2Span.textContent = '';
        mensagemErroGeralDiv.textContent = '';
        resultadoArea.style.display = 'none';

        const nomeAluno = nomeAlunoInput.value.trim();
        const nota1Str = nota1Input.value;
        const nota2Str = nota2Input.value;

        if (!nomeAluno) {
            mensagemErroGeralDiv.textContent = 'Por favor, insira o nome do aluno.';
            return;
        }

        let formValido = true;

        if (!validarNota(nota1Str)) { 
            errorNota1Span.textContent = 'Nota 1 inválida. Deve ser entre 0 e 10.';
            formValido = false;
        }
        
        if (!validarNota(nota2Str)) { 
            errorNota2Span.textContent = 'Nota 2 inválida. Deve ser entre 0 e 10.';
            formValido = false;
        }

        if (formValido) {
            const nota1 = parseFloat(nota1Str);
            const nota2 = parseFloat(nota2Str);

            const media = calcularMedia(nota1, nota2);
            const situacao = determinarSituacao(media);

            nomeAlunoResultado.textContent = `Aluno: ${nomeAluno}`;
            mediaFinalSpan.textContent = media.toFixed(2);
            situacaoFinalSpan.textContent = situacao;
            resultadoArea.style.display = 'block';
        } else if (!errorNota1Span.textContent && !errorNota2Span.textContent && nomeAluno) {
             
             mensagemErroGeralDiv.textContent = 'Por favor, corrija os campos destacados.';
        }
    });
});