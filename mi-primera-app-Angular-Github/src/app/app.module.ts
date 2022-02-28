import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { AnadirPersonaComponent } from './componentes/anadir-persona/anadir-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    AnadirPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
