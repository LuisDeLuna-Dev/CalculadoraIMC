var height = +document.getElementById("alt").value;
var weight = +document.getElementById("pes").value;
var imc = weight/(height*height);


bot.addEventListener('click',function calculate(){
    console.log(imc)
    if(imc < 18.5){
        document.getElementById("res").innerText="Seu IMC é de ${imc}. Você está magro. "
    } else if(imc<24.9) {
        document.getElementById("res").innerText="Seu IMC é de ${imc}. Você está normal" 
    } else if(imc<29.9) {
        document.getElementById("res").innerText="Seu IMC é de ${imc}. Você está sobre peso"
    }else if(imc<39.9) {
        document.getElementById("res").innerText="Seu IMC é de ${imc}. Você está obeso" 
    }else if(imc>39.9) {
        document.getElementById("res").innerText="Seu IMC é de ${imc}. Você está com obesidade mórbida" 
    } 
    console.log(typeof weight)//confirmação de que está como um número
})

