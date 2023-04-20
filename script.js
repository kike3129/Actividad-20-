function loguear(){

    var user=document.getElementById("usuario").value;
    var pass=document.getElementById("pass").value;
     if ( user == "enrique" && pass == "3129") {
        alert("usuario y contraseña validos")
        window.location="login.html";
     } 
     else   
     {
        alert("intenta de nuevo");
     }

}