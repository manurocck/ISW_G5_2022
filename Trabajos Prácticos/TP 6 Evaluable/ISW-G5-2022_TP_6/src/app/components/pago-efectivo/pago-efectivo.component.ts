import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-pago-efectivo',
  templateUrl: './pago-efectivo.component.html',
  styleUrls: ['./pago-efectivo.component.css']
})
export class PagoEfectivoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cantidadProductosCarrito(){
    return 5;
  }
  
  totalAPagar(){
    return 5000;
  }

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
