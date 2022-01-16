//selecionar o relogio q vai ser atualizado no html
let relogio = document.querySelector(".relogio")

//criar variavel de controle zerado
let segundos = 0

//criar formatação do timer
function formatarTimer(segundos) {
    let timer = new Date(segundos * 1000)
    return timer.toLocaleTimeString("pt-br", { hour12: false, milisecond: true, timeZone: "UTC"})
}

//criar variavel vazia para armazenar a atualização em tempo real
let atualizar;
////criar função de rodar o timer, incrementando a cada segundo
function atualizarTimer() {
    atualizar = setInterval(() => {
        segundos++
        relogio.innerHTML = formatarTimer(segundos)
    }, 1000);
}

//buscar botões no HTML para usar nas funções
const btnIniciar = document.getElementById("btn_iniciar")
const btnPausar = document.querySelector("#btn_pausar")
const btnZerar = document.querySelector("#btn_zerar")

//criar função de incializar
function iniciar() {
    //impedir que o botão seja clicado de novo
    //document.querySelector(".iniciar").disabled = true
    //document.querySelector(".pausar").disabled = false
    btnIniciar.classList.toggle("escondido")
    btnPausar.classList.toggle("escondido")

    //impedir que o botão acumule ordens de iniciar, rodando estranho
    //clearTimeout(atualizar)

    //colocar cor verde no tempo ativo
    relogio.classList.remove("pausado")
    relogio.classList.add("iniciado")

    //incrementar/ligar o timer
    atualizarTimer()

    console.log(`contagem iniciada em ${segundos} segundos`)
}

//criar função de pausar
function pausar() {
    //impedir que o botão seja clicado de novo
    //document.querySelector(".iniciar").disabled = false
    //document.querySelector(".pausar").disabled = true
    btnPausar.classList.toggle("escondido")
    btnIniciar.classList.toggle("escondido")

    //colocar cor laranja no tempo pausado
    relogio.classList.remove("iniciado")
    relogio.classList.add("pausado")

    //pausar o contador
    clearTimeout(atualizar)
    console.log(`contador pausado em ${segundos} segundos`)
}

//criar função de resetar
function zerar() {
    //pausar o contador
    clearTimeout(atualizar)
    relogio.innerHTML = "00:00:00"
    //zerar o contador
    //zerar o elemento html
    segundos = 0
    //retirar as cores
    relogio.classList.remove("iniciado", "pausado")
    //habilitar todos os botões
    //document.querySelector(".iniciar").disabled = false
    //document.querySelector(".pausar").disabled = true
    btnPausar.classList.add("escondido")
    btnIniciar.classList.remove("escondido")
    console.log(`contador zerado`)
}
