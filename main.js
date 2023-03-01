const form = document.getElementById('form-tarefas');
const tabelaTarefas = document.getElementById('tabela-tarefa');
const tarefas = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
})

tabelaTarefas.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('tarefa-concluida');
    }
});

function adicionaLinha() {
    const inputTarefa = document.getElementById('tarefas');
    tarefas.push(inputTarefa.value);
    inputTarefa.value = '';
    atualizaTabela();
}

function atualizaTabela() {
    let linhas = '';

    for (let i = 0; i < tarefas.length; i++) {
        const linha = `<li>${tarefas[i]}</li>`;
        linhas += linha;
    }

    tabelaTarefas.innerHTML = linhas;
}