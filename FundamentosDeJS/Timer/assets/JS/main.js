function relogio() {

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000)
    }

    // FORMA MAIS DINÂMICA, ADICIONANDO O "OUVINTE" PARA O DOM, E CRIANDO AÇÕES PARA OS BOTÔES COM UMA ESTRUTURA CONDICIONAL.
    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pause')
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pause')
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pause')
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    })


    // FORMA LONGA DE SE FAZER, CRIANDO UM "OUVINTE" DE EVENTOS PARA CADA BOTÃO
    // iniciar.addEventListener('click', function(event){
    //     relogio.classList.remove('pause')
    //     clearInterval(timer);
    //     iniciaRelogio();
    // });


    // pausar.addEventListener('click', function(event){
    //    clearInterval(timer);
    //    relogio.classList.add('pause')
    // });

    // zerar.addEventListener('click', function(event){
    //     clearInterval(timer);
    //     relogio.classList.remove('pause')
    //     relogio.innerHTML = '00:00:00';
    //     segundos = 0;
    // });
}
relogio();