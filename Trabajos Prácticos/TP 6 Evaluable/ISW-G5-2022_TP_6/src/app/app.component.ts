import { Component } from '@angular/core';
import { Direccion } from './models/direccion';

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
  
  estadoPedido = 'D';

  direccionIngresada = new Direccion();
  
  mostrar(){
    console.log(this.direccionIngresada.Calle);
    console.log(this.direccionIngresada.Numero);
    console.log(this.direccionIngresada.Referencia);
    console.log(this.direccionIngresada.Ciudad);
  }

}
