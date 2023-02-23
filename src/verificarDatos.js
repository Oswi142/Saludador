function verificarGenero(genre,nombre)
{
    var saludo=" ";
    if(genre=='M'){
        saludo="Hola señor "+nombre;
    }
    else{
        saludo="Hola señora "+nombre;
    }
    return saludo;
}

export default verificarGenero;