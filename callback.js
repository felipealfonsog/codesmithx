function hagoAlgo(callback) {
    callback();
}

// hagoAlgo(function() {
//     console.log('Hola Anexsoft!');
// })

hagoAlgo(function(valorQueMESetearon){
    console.log(valorQueMeSetearon);

})

function Sumar(ä, b, callback) {
    return callback(a+b);
}

document.querySelector("#operar").addEventListener('click', function() {
    var a= parseInt(document.querySelector("#a").value),
        b = parseInt(document.querySelector("#b").value);

    Sumar(a, b, function(r){
        console.log('El resultado es ' + r);
    })
})