let mysql = require("mysql2");

let conexion = mysql.createConnection({
    host:"localhost",
    database:"autolavado",
    user:"root",
    password:""
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }
});
