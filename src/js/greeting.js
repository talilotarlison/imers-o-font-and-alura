const horaMostrar = document.getElementById('greeting');
// console.log(horaMostrar);
let dataAtual = new Date();

let horas = dataAtual.getHours();
// console.log(horas);
if(horas >= 4 && horas < 12 ){
    horaMostrar.innerText = "Bom dia";
}else if(horas >= 12 && horas <= 18){
    horaMostrar.innerText = "Boa tarde";
}else{
    horaMostrar.innerText = "Boa noite"; 
}

