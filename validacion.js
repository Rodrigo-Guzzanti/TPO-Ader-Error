
let nombre =document.getElementById("Nombre");
let apellido=document.getElementById("Apellido");
let mail=document.getElementById("Email");


let validacionCampoVacio=(e)=>{
 let nom = e.target.value;
 let mensajeError=e.target;
 if(nom.trim().length==0){
     
     
     mensajeError.style.border="solid 1px red";
     mensajeError.nextElementSibling.classList.add("error");
     mensajeError.nextElementSibling.innerText="Campo requerido";
     return false;

 }
 else{
     mensajeError.nextElementSibling.classList.remove("error")
     mensajeError.nextElementSibling.innerText="";
     mensajeError.style.border="1px solid #1f53c5";
 }


}

let validacionEmail=e=>{
 let nom=e.target
 let mensajeError=e.target.value;
 let regex =new RegExp(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/);
 if(mensajeError.trim().length>=1 && !regex.test(mensajeError)){
     
     
     nom.style.border="solid 1px red";
    nom.nextElementSibling.classList.add("error");
     nom.nextElementSibling.innerText="Email invalido";
     return false;

 }
 else{
     nom.nextElementSibling.classList.remove("error")
     nom.nextElementSibling.innerText="";
     nom.style.border="1px solid #1f53c5";
 }
}
 



nombre.addEventListener("blur",validacionCampoVacio);
apellido.addEventListener("blur",validacionCampoVacio);

mail.addEventListener("input",validacionEmail);


document.getElementById("boton").onclick=function(){
 if( nombre.value.length==0 || apellido.value.length==0 || mail.value.length==0 ){
     event.preventDefault();
     let error=document.getElementById("error");

     document.getElementById("error").innerHTML="Hay campos incompletos";
     error.style.margin="30px"
     nombre.style.border="solid 1px red";
     apellido.style.border="solid 1px red";
     mail.style.border="solid 1px red";
     
  }
  else{
    document.getElementById("error").innerHTML="";

  }
}

