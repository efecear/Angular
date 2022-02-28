import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[] = []

  constructor() { }
getAllPersonas():Persona[]{
  let persona1 = new Persona()
  this.personas.push(new Persona("Hernan", "Borre", 28))
  this.personas.push(new Persona("Alejandro", "Fantino", 55))
  this.personas.push(new Persona("Nicky", "Nicole", 22))
  this.personas.push(new Persona("Federico", "Camarota"))
  this.personas.push(new Persona("John", "Reed", 32))

  return this.personas
}

// remover persona de la lista
removePersona(ListaDePersona: Persona[], personaToDelete: Persona): Persona[]{
  // IMpement LOgic to remove a Persona
  return ListaDePersona.filter (p => p.nombre !== personaToDelete.nombre)
}

// anadir persona de la lista
anadirPersona(persona: Persona): void{
  // IMpement LOgic to remove a Persona
}

}
