
var arr_gastos = getGastos();

function setGasto(obj){
    arr_gastos.push(obj)
    setGastos(arr_gastos)
}

function printArray(){
    $("#tbody-gastos").html("");
    let body="";
    arr_gastos.forEach(function (element) {
        body += "<tr><td>"+element.id+"</td><td>"+element.nombre_gasto+"</td><td>"+element.fecha+"</td><td>"+element.cantidad+"</td><td>";
    });
    $("#tbody-gastos").html(body);
}
