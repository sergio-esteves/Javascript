    var cotacao = Number(window.prompt('Antes de mais nada. Qual é a contação do dólar atual?'))
function converter(){
    var real = Number(window.prompt('Quantos R$ você tem na carteira?'))
    var dolar = real/cotacao 
    var res = document.querySelector("section#res")
    res.innerHTML = (`<p style="font: normal bold 1.5em arial"> O valor de R$ ${real} em dólar custa US$ ${dolar}</p>`)
}