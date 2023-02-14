function getDiaSemana(diaSemana) {
    const diaString = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
        'Quinta-feira', 'Sexta-feira', 'Sábado']
    return diaString[diaSemana] //Solução mais simples, sem utilizar o case.
}

    function getMes(mes) {
        const mesString = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        return mesString[mes] //Solução mais simples, sem utilizar o case.
    }
    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`
    }

    function getData(dataAtual) {
        const diaSemana = getDiaSemana(dataAtual.getDay());
        const mesAtual = getMes(dataAtual.getMonth());
        return `${diaSemana}, ${dataAtual.getDate()} de ${mesAtual} de ${dataAtual.getFullYear()} ${zeroAEsquerda(dataAtual.getHours())}:${zeroAEsquerda(dataAtual.getMinutes())}`;
    }
    function setData() {
        const dataAtual = new Date();
        const dataMsg = getData(dataAtual);
        const resultado = document.querySelector('#resultado');
        resultado.classList.add('data-formato');
        resultado.innerHTML = dataMsg;
    }
    setData();
//** SOLUÇÃO MAIS SIMPLES, SEM TANTAS LINHAS DE CÓDIGO **
//const resultado = document.querySelector('#resultado');
//const dataAtual = new Date();
// const opcoes = {
//    dateStyle: 'full',
//    timeStyle: 'short'
// };// resultado.innerHTML = dataAtual.toLocaleString('pt-BR', opcoes); ou resultado.innerHTML = dataAtual.toLocaleString('pt-BR', {dateStyle: 'full',timeStyle: 'short'});