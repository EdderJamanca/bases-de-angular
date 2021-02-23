interface Pasajero {
    nombre:String;
    hijos?:string[]
}

const pasajero1:Pasajero ={
    nombre: "Edder"
}

const pasajero2:Pasajero ={
    nombre:"Wendy",
    hijos:["Natalia","Grabiel"]
    
}

function imprimirHijos(pasajero:Pasajero):void {

    const cuantosHijos=pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
    
}
imprimirHijos(pasajero2);