

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
function sumar(a:number, b:number):number {
    return a +b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

function multiplicar (numero: number,otroNumero?: number, base:number=2):number {

    return numero*base;

}
// SEGUNDA SECCION

interface Personaje01{
    nombre:string,
    pv:number,
    mostrarHp:()=>void;
}
// CREAR LA FUNCION CURAR
function cura(personaje:Personaje01, cuaraX:number):void{

    personaje.pv +=cuaraX;

}

const nuevoPersonaje:Personaje01={
    nombre:"edder",
    pv:50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv);
        
    }
}
// ejecucion de la función curar
console.log("ejecucion de la función curar");
cura(nuevoPersonaje,10);

console.log("ejecucion el nuevo Personaje");
console.log(nuevoPersonaje);


const rsultado2 =sumar(10,12);
console.log(rsultado2);

const rsultado1 =sumarFlecha(10,12);
console.log(rsultado1);

const resultado =multiplicar(5,0,10);

console.log(resultado);
