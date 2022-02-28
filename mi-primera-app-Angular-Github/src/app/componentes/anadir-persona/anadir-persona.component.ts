import { Component, Input, OnInit} from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-anadir-persona',
  templateUrl: './anadir-persona.component.html',
  styleUrls: ['./anadir-persona.component.css']
})
export class AnadirPersonaComponent implements OnInit {

  @Input() persona: Persona = new Persona()
  personas: Persona[] = []
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  }

  agregandoPersona(): void{
    this.personaService.anadirPersona()
  }

}


