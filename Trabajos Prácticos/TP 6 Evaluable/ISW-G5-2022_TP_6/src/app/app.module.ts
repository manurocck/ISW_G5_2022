import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DireccionEnvioComponent } from './direccion-envio/direccion-envio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DireccionEnvioComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
