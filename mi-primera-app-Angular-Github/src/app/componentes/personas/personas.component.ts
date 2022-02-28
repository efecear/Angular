import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
// Atributos
  title =  "Esta es nuestra lista de personas!";
  personas: Persona[] = []
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
this.getAllPersonas()
  }
getAllPersonas():void{
  this.personas = this.personaService.getAllPersonas()
}

borrarPersonaDeLista(personaParaBorrar: Persona){
  this.personas = this.personaService.removePersona(this.personas, personaParaBorrar)
}
}
