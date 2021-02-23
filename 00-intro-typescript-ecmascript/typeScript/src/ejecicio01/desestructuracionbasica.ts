
interface Reproductor {
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalle 
}

interface Detalle{
    autor:string,
    anio:number
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:"Mess",
    detalles:{
        autor:"Ed Sheeran",
        anio:2015
    }
}

const {volumen,segundo, cancion,detalles}=reproductor;

const {autor,anio}=detalles;

console.log("El volumen actual:",volumen);
console.log("El segundo actual:",segundo);
console.log("La Cancion actual:",cancion);
console.log("El autor:",autor);

// ARREGLO
const dbz:string[]=["Goku","Vegeta","Trunks"];

const [p1,p2,p3]=dbz;
// const [p1,p2,p3]=dbz;
console.log("Personaje 2",p2);
console.log("Personaje 3",p3);
