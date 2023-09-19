function calculate(){
    var height = document.getElementById(alt).value / 100;
    var weight = document.getElementById(pes).value;
    
    var imc = weight(height*height)
    var text=""
    if(imc < 18.5){
        window.alert("Você está magro.")
    } else if(imc<24.9) {
        window.alert("Você está normal")
    } else if(imc<29.9) {
        window.alert("Você está sobre peso")
    }else if(imc<39.9) {
        window.alert("Você está obeso")
    }else if(imc>39.9) {
        window.alert("Você está com obesidade mórbida")
    }
    document.getElementById("res").innerText="Calculou"
    
}