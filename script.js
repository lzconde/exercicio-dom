const form = document.querySelector('#main-form')

function comparaNumero(a, b){
    if(a > b){
        return false;
    }else{
        return true;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const primeiroNumero = document.querySelector('#number-a').value;
    const segundoNumero = document.querySelector('#number-b').value;

    if(comparaNumero(primeiroNumero, segundoNumero) === false){
        alert("O segundo numero é menor que o primero!")
    }else{
        alert("Correto!! O segundo numero é maior que o primeiro")
    }

})


