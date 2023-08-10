//exemplo de condição aninhada
var idade = 18;
console.log(`A sua idade é: ${idade}`);
if(idade < 16){
    console.log('Não vota!');
}else if(idade > 16 && idade < 18){
    console.log('Voto opcional');
}else if(idade >= 65){
    console.log('Voto opcional');
}else{
    console.log('Voto obrigatório!!');
}

//exemplo de condição multipla
//0-domingo, 1-segunda, 2-terça, 3-quarta, 4-quinta, 5-sexta e 6-sábado
var agora = new Date();
var dia = agora.getDay();
console.log(dia);
switch(dia){
    case 0:
        console.log('Domingo');
        break;

    case 1:
        console.log('Segunda');
        break;

    case 2:
        console.log('Terça');
        break;

    case 3:
        console.log('Quarta');
        break;

    case 4:
        console.log('Quinta');
        break;
    
    case 5:
        console.log('Sexta');
        break;

    case 6:
        console.log('Sábado');
        break;
    
    default:
        console.log('Erro: Dia da semana inexistente.');
        break;
}