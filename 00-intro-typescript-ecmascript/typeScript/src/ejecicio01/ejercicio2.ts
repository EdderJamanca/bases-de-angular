let habitaciones: string[]=['Bash','Counter','Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades:string[];
    puebloNatal?: string
}

const personaje:Personaje ={
    nombre: "Strinder",
    hp:100,
    habilidades:['Bash','Count','Healdo']
}

personaje.puebloNatal="Puebli paleta";

console.table(personaje);