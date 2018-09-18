/**
 * Función para agregar toda la logica de la administración 
 * usuarios
 */

function usersActionsController() {
    var users = [];
    //Registro de usuario
    document.getElementById("save").onclick =     
    function() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var profession = document.getElementById("profession").value;

        //Valida nombre vacio o nulo
        if((firstName == null || firstName.length === 0)
            || (lastName == null || lastName.length === 0)
            || (email == null || email.length === 0)
            || (profession == null || profession.length === 0)){
            alert("Ingrese todos los campos, son requeridos");
        } 
        //Valida si el nombre de usuari ya se encuentra registrado
       /* else if(users.includes(name)){
            alert("Nombre de usuario ya existe");
        } */
       
        //Si cumple todas las validaciones registra y adiciona a la tabla
        else{
            var user = new User(firstName, lastName, email, profession);
            users.push(user);
            console.log(users);            
            
            /*users.push(firstName, lastName, email, profession);                   
            //Crea tabla con usuario registrado
            var body = document.getElementById("tblUser");        
            var result = "<tr><th>UserName</th></tr>";        
            for(var i=0; i<users.length; i++){
                result += "<tr><td>"+users[i]+"</td></tr>";
            }
            body.innerHTML = result;*/
        } 


        //crear constructor usuario
        function User(firstName, lastName, email, profession) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.profession = profession;
        };
    }
   
 }


 

