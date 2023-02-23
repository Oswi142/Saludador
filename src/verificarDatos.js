function verificarGenero(genre,nombre,edad,leng)
{
    var saludo=" ";
    if(leng=="ES"){
        if(genre=='M'){
            if(edad>=30){
                saludo="Hola señor "+nombre;
            }
            else{
                saludo="Hola joven "+nombre;
            }
        }
        else{
            if(edad>=30){
                saludo="Hola señora "+nombre;
            }
            else{
                saludo="Hola señorita "+nombre;
            }
        }
    }
    if(leng=="EN"){
        if(genre=='M'){
            if(edad>=30){
                saludo="Hello Mr. "+nombre;
            }
            else{
                saludo="Hello  "+nombre;
            }
        }
        else{
            if(edad>=30){
                saludo="Hello Mrs. "+nombre;
            }
            else{
                saludo="Hola Ms. "+nombre;
            }
        }
    }
    
    return saludo;
}

export default verificarGenero;