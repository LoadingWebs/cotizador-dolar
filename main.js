function getDolarOficial(monto) {
    fetch ("https://dolarapi.com/v1/dolares/oficial")
    .then (respuesta => respuesta.json())
    .then (resultado => {
        return (resultado);
    })
    .catch (error => {
        console.log("error al consumir api dolar");
    })
}

function getDolarBlue(monto) {
    fetch ("https://dolarapi.com/v1/dolares/blue")
    .then (respuesta => respuesta.json())
    .then (resultado => {
        return(resultado);
    })
    .catch (error => {
        console.log("error al consumir api dolar");
    })
}

function mostrarResultado(){
    let importe = document.getElementById("monto").value
} 


