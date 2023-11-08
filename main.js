function getDolarOficial(monto) {
    fetch ("https://dolarapi.com/v1/dolares/oficial")
    .then (respuesta => respuesta.json())
    .then (resultado => {
        let valor1 =  monto/resultado.venta
        document.getElementById("dolarOficial").innerHTML = resultado.moneda + " " + valor1
    })
    .catch (error => {
        console.log("error al consumir api dolar");
    })
}

function getDolarBlue(monto) {
    fetch ("https://dolarapi.com/v1/dolares/blue")
    .then (respuesta => respuesta.json())
    .then (resultado => {
        let valor2 =  monto/resultado.venta
        document.getElementById("dolarBlue").innerHTML = resultado.moneda + " " + valor2
    })
    .catch (error => {
        console.log("error al consumir api dolar");
    })
}

function mostrarResultado(){
    let importe = parseInt(document.getElementById("monto").value)
    getDolarOficial(importe)
    getDolarBlue(importe)
}   