
class PersonaNormal {

    constructor(
        public nombre:string,
        public direccion:string
    ){}
}

// Heroe segunda clase
class Heroe extends PersonaNormal {

    constructor (
        public alterego:string,
        public edad:number,
        public nombreReal:string 
    ) {
        super(nombreReal,"New York, USA");
    }
}

const iroman = new Heroe("Iroman",45,"Tony");

console.log(iroman);
