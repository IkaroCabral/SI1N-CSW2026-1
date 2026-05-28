function calcularidade() {
   
    var anoDigitado = document.getElementById('inputAno').value;
     var hoje = new Date() 
    var anohoje = new Date().getFullYear();
     var idade = anohoje - Number(anoDigitado);
      document.getElementById('resultado').innerHTML = "Sua idade é: " + idade + " anos.";
}
