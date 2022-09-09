import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { PagoEfectivoComponent } from './components/pago-efectivo/pago-efectivo.component';
import { DireccionEnvioComponent } from './components/direccion-envio/direccion-envio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DireccionEnvioComponent,
    PagoEfectivoComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
