import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-pago-efectivo',
  templateUrl: './pago-efectivo.component.html',
  styleUrls: ['./pago-efectivo.component.css']
})
export class PagoEfectivoComponent implements OnInit {

  FormRegistroTarjeta = new FormGroup({
    Cantidad: new FormControl('',[
      Validators.required,
    ]),
    Total: new FormControl('',[
      Validators.required,
    ]),
    NumeroTarjeta: new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(16),
    ]),
    Vencimiento: new FormControl('',[
      Validators.required,
      Validators.maxLength(7),
      Validators.minLength(7),
    ]),
    CodigoSeguridad: new FormControl('',[
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3),
    ])
  });

  submitted = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  cantidadProductosCarrito(){
    return 5;
  }
  
  totalAPagar(){
    return 5000;
  }

  
}
