import { Component } from '@angular/core';

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

  
}
