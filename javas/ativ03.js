function enviar(){
    var ano = document.getElementById('ano');
    var sex = document.getElementById('sexo');
    var resul = document.getElementById('resul');
    var data = new Date();
    var anoA = data.getFullYear();
    var idade = anoA - Number(ano.value);
    sex = String(sex.value).toLowerCase();
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if(sex == 'feminino' && ano.value > 1920){
        resul.innerHTML = (`Você é mulher e sua idade é ${idade}.`);
        img.setAttribute('src', '../imgs/feminino.png');
    }else if(sex == 'masculino' && ano.value > 1920){
        resul.innerHTML = (`Você é homem e sua idade é ${idade}.`);
        img.setAttribute('src', '../imgs/masculino.png');
    }else{
        resul.innerHTML = ('Insira todos os dados corretamente.');
    }
    resul.appendChild(img);
}