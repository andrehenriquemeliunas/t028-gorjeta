function Calcular(){
    var valor = document.getElementById('valor')
    var resultado = document.getElementById('resultado')

    if(valor.value.length == 0){
        alert('Verifique os dados e tente novamente.')
    }else{
        var qualidade = document.getElementsByName('radqua')
        var escolhaQualidade = ''
        var percentualOtimo = 0.2
        var gorjeta0 = valor * percentualOtimo

        if(radqua[0].checked){
            escolhaQualidade = 'otimo'
            if(gorjeta0 > 10){
                resultado.innerHTML = 'Deu certo!'
            }
        }
    }
}