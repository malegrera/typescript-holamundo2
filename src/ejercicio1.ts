let nombre:string="Nombre";
let edad:number= 30;

class Personas {
    nombre: string;
    edad: number;
  
    constructor(nombre:string, edad:number) {
      this.nombre = nombre;
      this.edad = edad;
    }
}
let persona:Personas=new Personas(nombre,edad);
console.log(persona);

