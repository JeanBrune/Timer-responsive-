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


//criar função de incializar
function iniciar() {
    //impedir que o botão seja clicado de novo
    document.querySelector(".iniciar").disabled = true
    document.querySelector(".pausar").disabled = false
    //clearTimeout(atualizar)
    //colocar cor verde
    relogio.classList.remove("pausado")
    relogio.classList.add("iniciado")
    //incrementar ligar o timer
    atualizarTimer()
    console.log(`contagem iniciada em ${segundos} segundos`)
}

function pausar() {
    //impedir que o botão seja clicado de novo
    document.querySelector(".iniciar").disabled = false
    document.querySelector(".pausar").disabled = true
    //pausar o contador
    clearTimeout(atualizar)
    //colocar cor vermelha
    relogio.classList.remove("iniciado")
    relogio.classList.add("pausado")
    console.log(`contador pausado em ${segundos} segundos`)
}

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
document.querySelector(".iniciar").disabled = false
document.querySelector(".pausar").disabled = true
console.log(`contador zerado`)
}