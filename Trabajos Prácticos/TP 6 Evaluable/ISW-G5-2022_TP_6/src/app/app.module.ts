import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DireccionEnvioComponent } from './direccion-envio/direccion-envio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedioDePagoComponent } from './medio-de-pago/medio-de-pago.component';
import { EntregaComponent } from './entrega/entrega.component';




@NgModule({
  declarations: [
    AppComponent,
    DireccionEnvioComponent,
    MedioDePagoComponent,
    EntregaComponent,
    

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
