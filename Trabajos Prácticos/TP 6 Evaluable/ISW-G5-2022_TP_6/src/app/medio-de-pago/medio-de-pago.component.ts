import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-medio-de-pago',
  templateUrl: './medio-de-pago.component.html',
  styleUrls: ['./medio-de-pago.component.css']
})
export class MedioDePagoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  seleccionado = 'Efectivo';
  
  //FUNCIONES CON LÓGICA DE NEGOCIO EXTERNAS
  cantidadProductosChanguito(){
    return 5;
  }
  totalChanguito(){
    return 5000;
  }

  //SELECCION DE BOTONES
  seleccionar(medio:string){
    this.seleccionado = medio;
  }
  quiereEfectivo(){
    if (this.seleccionado == 'Efectivo'){
      return 'seleccionado';
    } else return '';
  }
  quiereTarjeta(){
    if (this.seleccionado == 'Tarjeta'){
      return 'seleccionado';
    } else return '';
  }

  //VALIDACIONES

  validezCampo(campo:string){
    if( (this.FormRegistroTarjeta.controls[campo].touched || this.submitted)
          && this.FormRegistroTarjeta.controls[campo].errors)
    return 'is-invalid';

    else return '';
  }

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

  CVC(codigoIngresado:string){
    if(codigoIngresado.length==3){
      
      for(let i = 0 ; i<codigoIngresado.length ; i++){
        codigoIngresado[i]; //tiene que ser un numero
      }

      return true;
    }else return false;
  }

  esTarjetaDeDebito(){ //tiene que tener 16 digitos y investigar visa debito y master debito
    return true;
  }
  esTarjetaDeCredito(){ //tiene que tener 16 digitos y investigar visa credito y master credito
    return true;
  }

}
