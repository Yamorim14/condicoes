function pais(){
    var res = document.getElementById('pais');
    res.value = res.value.toLowerCase();
    var resul = document.getElementById('resul');

    if(res.value == 'brasil'){
        resul.innerHTML = ('Você é Brasileiro. Seja bem-vindo!!');
    }else if(res.value == 'brazil'){
        resul.innerHTML = ('Você é Brasileiro. Seja bem-vindo!!');
    }else{
        resul.innerHTML = ('Você é estrangeiro. Saia daqui!!');
    }
}