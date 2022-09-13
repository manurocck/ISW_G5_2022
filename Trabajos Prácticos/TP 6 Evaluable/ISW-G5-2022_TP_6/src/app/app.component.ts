import { Component } from '@angular/core';
import { Direccion } from './models/direccion';
import { MedioPago } from './models/medio-de-pago';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ISW-G5-2022_TP_6';
  tiposEstadoPedido = {
    D: '(Direecion)',
    P: '(Pago)',
    E: '(Entrega)'
  };
  
  estadoPedido = 'P';


  ingresoDireccion = new Direccion();
  ingresoMedioPago = new MedioPago();
  
  mostrar(){
    console.log(this.ingresoDireccion.Calle);
    console.log(this.ingresoDireccion.Numero);
    console.log(this.ingresoDireccion.Referencia);
    console.log(this.ingresoDireccion.Ciudad);

    console.log(this.ingresoMedioPago.mostrar());
  }

}
