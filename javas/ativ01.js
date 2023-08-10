function velo(){
    var veloci = document.getElementById('velocidade');
    var resul = document.getElementById('resul');
    var km = Number(veloci.value);
    if(km <= 60){
        resul.innerHTML = (`Você está dirigindo a ${km}Km/h. Tome cuidado com a velocidade!!`);
    }else{
        resul.innerHTML = (`Você está dirigindo a ${km}Km/h. Acima da velocidade permitida!! Você foi multado!!`);
    }
}