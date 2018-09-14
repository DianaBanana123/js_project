/**
 * Función para agregar toda la logica de la administración 
 * usuarios
 */

function usersActionsController() {
    var users = [];
    //Registro de usuario
    document.getElementById("save").onclick =     
    function() {
        var name = document.getElementById("user").value;        
       
        //Valida nombre vacio o nulo
        if(name == null || name.length === 0){
            alert("Ingrese un nombre de usuario");
        } 
        //Valida si el nombre de usuari ya se encuentra registrado
        else if(users.includes(name)){
            alert("Nombre de usuario ya existe");
        } 
       
        //Si cumple todas las validaciones registra y adiciona a la tabla
        else{           
            users.push(name);                   
            //Crea tabla con usuario registrado
            var body = document.getElementById("tblUser");        
            var result = "<tr><th>UserName</th></tr>";        
            for(var i=0; i<users.length; i++){
                result += "<tr><td>"+users[i]+"</td></tr>";
            }
            body.innerHTML = result;
        } 
    }
   
 }


 

