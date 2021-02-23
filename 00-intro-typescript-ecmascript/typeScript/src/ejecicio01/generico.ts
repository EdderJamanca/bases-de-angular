// GENERICO

function queTipoSoy<T>(argumento:T){
    return argumento;
}

let soyTipoString =queTipoSoy("Hola mundo");

    console.log(soyTipoString);
    
let soyNumero = queTipoSoy( 200 );

    console.log(soyNumero);

let soyArreglo =queTipoSoy([1,2,3,4,5,6,7,8]);

console.log(soyArreglo);

let soyExplicito =queTipoSoy<number>(100);
console.log(soyExplicito);
