const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i<botoes.length;i++){
    botoes[i].onclick=function(){
        for(j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        } 
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }    
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo = new Date("2024-06-17T00:00:00");
let tempoAtual = new Date ()
contadores[0].textContent= tempoObjetivo1;

Function calculaTempo(tempoObjetivo){
    let tempoAtual = new date ();
    let tempoFinal = tempoObjetivo-tempoAtual
    let segundos = math.floor(tempoFinal/1000);
    let minutos = math.floor(segundos/60);
    let horas = math.floor(minutos/60);
    let dias = math.floor(horas/24);
    return dias+"dias"+ horas+"horas" + minutos+"minuto" +segundos+"segundos"
    
}
   



