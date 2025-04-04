const botao = document.getElementById("calcular");
botao.addEventListener('click' , idade);

function idade(){
    const nome = document.getElementById("nome").value;
    const nasceu = document.getElementById("nasceu").value;
    const ano_atual = document.getElementById("atual").value;
    const ver_resultado = document.getElementById("resultado");

    if(nome !== "" && nasceu !== "" && ano_atual !== ""){
        let valor_total = parseInt(ano_atual) - parseInt(nasceu);
        ver_resultado.textContent = (`${nome} já completou ou irá fazer este ano ${valor_total} anos`)
    }else{
        ver_resultado.textContent = ("Preencha todas opcões")
    }

}