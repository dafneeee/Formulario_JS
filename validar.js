function validar(){
    var nombre; 
    var apellidos; 
    var correo;
    var usuario; 
    var telefono; 
    var pass; 
    var saludo;

    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    telefono = document.getElementById("telefono").value;
    pass = document.getElementById("pass").value;
    expresion = /\w+@\w+\.+[a-z]/; //considere @ y . 
    console.log(expresion.test(correo));
    saludo = "Bienvenid@ " + nombre + " " + apellidos + ", su usuario es: " + usuario + " y su contraseña es privada, no la comparta. ";

    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || telefono === ""|| pass === "") { 
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellidos.length>80){
        alert("El apellido es muy largo");
        return false; }
    
    else if (correo.length>100){
        alert("Ingrese un correo válido");
        return false; }
    
    
    else if (usuario.length>20){
        alert("Ingrese un usuario válido");
        return false; }
    
    else if (telefono.length>15){
        alert("Ingrese un telefono válido");
        return false; }

    else if (!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
        }
    else if (isNaN(telefono)){
        alert("El telefono no es un numero");
        return false;
        }
    
    alert(saludo);
}
