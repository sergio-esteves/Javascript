function calcular(){
   var produto = window.prompt('Qual o nome do produto que você estar comprando?')
    var valorcompra = Number(window.prompt(`Quanto custa o ${produto} ?`))
    var valorproduto = Number(window.prompt(`Qual valor você deu para pagar ${produto} ?`))
    troco = valorproduto - valorcompra
    window.alert(`Você comprou o ${produto} que custa R$ ${valorcompra} e deu R$ ${valorproduto} e restou R$ ${troco} de troco`)
}