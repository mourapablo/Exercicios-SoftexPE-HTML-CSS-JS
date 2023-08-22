var nomecx = document.getElementById('nomes');
var idadecx = document.getElementById('idade');
var alturacx = document.getElementById('altura');
let pesocx = document.getElementById('pesos');
var sexocx = document.querySelector('#sexo');
var exercx = document.getElementById('exer');
var res = document.getElementById('res');
let meubotao = document.querySelector(".botao");

meubotao.addEventListener("click", function() {
  meubotao.classList.add("fade-in","active");
});




function calcular() {
    var nome = nomecx.value;
    var idade = Number(idadecx.value);
    var altura = Number(alturacx.value);
    var pesos = Number(pesocx.value);
    var exer = exercx.value;
    var tmb;

    if(nome == "" || nome == null || idade == "" || idade == null || altura == "" || altura == null){
        alert('Você não digitou os valores corretamente. Confira e digite novamente.')
        return
    }
    else if (sexocx.value == 'masculino') {
        tmb = 66.5 + (13.8 * pesos) + (5 * altura) - (6.8 * idade);
    } else if (sexocx.value == 'feminino') {
        tmb = 655.1 + (9.6 * pesos) + (1.8 * altura) - (4.7 * idade);
    } if (exer == 'sedentario') {
        tmb *= 1.2;
    } else if (exer == 'leve') {
        tmb *= 1.375;
    } else if (exer == 'moderado') {
        tmb *= 1.55;
    } else if (exer == 'ativo') {
        tmb *= 1.725;
    } else if (exer == 'muitoativo') {
        tmb *= 1.9;
       
    }

    res.innerHTML = nome + ', sua TMB é ' + tmb.toFixed(2) + ' kcal/dia.';

   
}

