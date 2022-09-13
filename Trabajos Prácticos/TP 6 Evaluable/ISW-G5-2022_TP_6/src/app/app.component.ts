import { Component } from '@angular/core';
import { Direccion } from './models/direccion';
import { FormaEntrega } from './models/formaentrega';
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
    E: '(Entrega)',
    F: '(Final)'
  };
  
  estadoPedido = 'D';


  ingresoDireccion = new Direccion();
  ingresoMedioPago = new MedioPago();
  ingresoEntrega = new FormaEntrega();
  
  mostrar(){
    console.log(this.ingresoDireccion.Calle);
    console.log(this.ingresoDireccion.Numero);
    console.log(this.ingresoDireccion.Referencia);
    console.log(this.ingresoDireccion.Ciudad);

    console.log(this.ingresoMedioPago.mostrar());
  }

}
