function getDolarOficial(monto) {
    fetch ("https://dolarapi.com/v1/dolares/oficial")
    .then (respuesta => respuesta.json())
    .then (resultado => {
        console.log(resultado);
    })
    .catch (error => {
        console.log("error al consumir api dolar");
    })
}

function getDolarBlue(monto) {
    fetch ("https://dolarapi.com/v1/dolares/blue")
    .then (respuesta => respuesta.json())
    .then (resultado => {
        console.log(resultado);
    })
    .catch (error => {
        console.log("error al consumir api dolar");
    })
}

getDolarBlue(100)


