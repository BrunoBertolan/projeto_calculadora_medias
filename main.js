const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji " />'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault();

   adicionaLinha()
   atualizaTabela() 
   atualizaMediaFinal()
} );

function adicionaLinha () {
    const inputNomeAtvidade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtvidade.value)){
        alert(`A atividade: ${inputNomeAtvidade.value}já foi inserida`)
    } else { atividades.push(inputNomeAtvidade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${inputNomeAtvidade.value}</td>` 
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
    
        linhas += linha
    }

    inputNomeAtvidade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal () {
   const mediaFinal = calculaMediaFinal()

   document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
   document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado: spanReprovado

}
function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]

    }

    return somaDasNotas / notas.length
}