const respostas = []

const form = document.getElementById('survey-form')
const calcularBtn = document.getElementById('calcular')
const resultadoDiv = document.getElementById('resultado')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const idadeValue = Number(document.getElementById('idade').value)
    const sexoValue = document.getElementById('sexo').value
    const opiniaoValue = Number(document.getElementById('opiniao').value)

    if (!idadeValue || idadeValue < 1) {
        alert('Digite uma idade válida.')
        return
    }

    const resposta = {
        idade: idadeValue,
        sexo: sexoValue,
        opiniao: opiniaoValue
    }

    respostas.push(resposta)
    atualizarMensagem(`Resposta adicionada. Total de respostas: ${respostas.length}.`)
    form.reset()
})

calcularBtn.addEventListener('click', function () {
    if (respostas.length === 0) {
        atualizarMensagem('Adicione pelo menos uma resposta antes de calcular.')
        return
    }

    const idades = respostas.map(r => r.idade)
    const opinioes = respostas.map(r => r.opiniao)

    const somaIdades = idades.reduce((acc, idade) => acc + idade, 0)
    const mediaIdade = somaIdades / respostas.length
    const idadeMaisVelha = Math.max(...idades)
    const idadeMaisNova = Math.min(...idades)

    const pessimoCount = opinioes.filter(op => op === 1).length
    const otimoBomCount = opinioes.filter(op => op === 4 || op === 3).length
    const porcentagemOtimoBom = (otimoBomCount / respostas.length) * 100

    const mulheresCount = respostas.filter(r => r.sexo === 'feminino').length
    const homensCount = respostas.filter(r => r.sexo === 'masculino').length
    const outrosCount = respostas.filter(r => r.sexo === 'outros').length

    resultadoDiv.innerHTML = `
        <p><strong>Média de idade:</strong> ${mediaIdade.toFixed(1)}</p>
        <p><strong>Idade mais velha:</strong> ${idadeMaisVelha}</p>
        <p><strong>Idade mais nova:</strong> ${idadeMaisNova}</p>
        <p><strong>Pessoas que responderam péssimo:</strong> ${pessimoCount}</p>
        <p><strong>Porcentagem de ótimo e bom:</strong> ${porcentagemOtimoBom.toFixed(1)}%</p>
        <p><strong>Mulheres:</strong> ${mulheresCount}</p>
        <p><strong>Homens:</strong> ${homensCount}</p>
        <p><strong>Outros:</strong> ${outrosCount}</p>
        <p><strong>Total de respostas:</strong> ${respostas.length}</p>
    `
})

function atualizarMensagem(mensagem) {
    resultadoDiv.innerHTML = `<p>${mensagem}</p>`
}

 