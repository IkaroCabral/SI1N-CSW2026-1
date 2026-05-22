document.writeln('OLÁ MUNDO!!!');


/*POPAP*/
window.alert("OLÁ MUNDO SEU LINDO!!!");



/*referenciar*/
document.getElementById('Título').innerHTML = 'OLÁ Mundo';


let nomePrompt = window.prompt("Olá Aluno de Java Scripti, qual o seu nome?")

document.getElementById('nomeAluno').innerHTML = ("O nome do aluno javascript é : " + nomePrompt)




let resposta = window.confirm('Você gosta de JavaScript ? ')

if (resposta) {
    document.getElementById('respostaaluno').innerHTML = 'o aluno gosta de javaScript'
}
else{
     document.getElementById('respostaaluno').innerHTML = 'o aluno não gosta de javaScript'
}




function exibeNomeAluno() {
    window.alert('dentro da função')
}

function exibeNomeAluno() {
     let imputAluno = document.getElementById('ipnutNomeAluno').value; 
     document.getElementById('resposta').innerHTML = " o nome do aluno digitadpo foi: ' + inputAluno";

     document.getElementById('resposta')
}



