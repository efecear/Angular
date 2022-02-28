export class Persona {

    nombre:string
    apellido:string
    edad:number
    nacionalidad:string

    constructor(nombre:string = "" , apellido:string = "", edad:number = 0, nacionalidad:string = ""){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.nacionalidad = nacionalidad
    }

    cumplirAnios(){
        this.edad++
    }

    descumplirAnios(){
        this.edad--
    }

}