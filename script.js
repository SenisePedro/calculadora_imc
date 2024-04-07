var peso;
var altura;
var imc;
var resultado;

function calcular(event){
  event.preventDefault()
  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;
  imc = peso / (altura*altura);
  resultado = document.getElementById('resultado');

  if(imc < 17){
    resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuidado! Você está muito abaixo do peso';
  }else if(imc > 17 && imc < 18.49){
    resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está abaixo do peso';
  }else if(imc >= 18.5 && imc < 24.99){
    resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está no peso ideal';
  }else if(imc >= 25 && imc <= 29.9){
    resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está acima do peso';
  }else if(imc >= 30){
    resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está obeso(a) <br> <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicH4oz6oG4EaLLenR8qCMe4dPLuguzdmV79uZMsyqJBZzRGJgTLNZJbI_H5bHaoG4h4Apgf9IDng0AYQghoHckbvukrJSgAx5uThMNlFm5sKu1tzcWPVuIXjuFopkqygS8kqb86amGXzg/s640/prostituta+gostosa+eu+pegava.jpg">';
  }

}
/*
function acao(){
  document.write("Executando... <br>")
}

setInterval(acao, 1000)
*/