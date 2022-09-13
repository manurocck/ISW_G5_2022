import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";
import { MedioPago } from '../models/medio-de-pago';

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
  submitted = false;

  //PERSISTENCIA - COMUNICACION CON COMPONENTE PRINCIPAL
  //NAVEGACIÓN DE BOTONES
  
  @Output() estado = new EventEmitter<string>();
  @Output() info = new EventEmitter<MedioPago>();

  medioPago = new MedioPago();

  siguiente(){ 
    //Seleccionó efectivo y la formEfectivo es válida
    if((this.seleccionado == 'Efectivo') && !this.FormPagoEfectivo.invalid){
      this.medioPago.monto = parseInt(this.FormPagoEfectivo.value.Monto);

      this.info.emit(this.medioPago);
      this.estado.emit('E');
    }//Seleccionó tarjeta y la formTarjeta es válida
    else if((this.seleccionado == 'Tarjeta') && !this.FormRegistroTarjeta.invalid){
      this.medioPago.nombreApellido = this.FormRegistroTarjeta.value.NombreApellido;
      this.medioPago.numeroTarjeta  = this.FormRegistroTarjeta.value.NumeroTarjeta;
      this.medioPago.vencimiento    = this.FormRegistroTarjeta.value.Vencimiento;
      this.medioPago.cvc            = parseInt(this.FormRegistroTarjeta.value.CodigoSeguridad);

      this.info.emit(this.medioPago);
      this.estado.emit('E');
    }
    return;
  }

  volver(){
    this.estado.emit('D');
  }


  //FUNCIONES CON LÓGICA DE NEGOCIO EXTERNAS
  cantidadProductosChanguito(){
    return 5;
  }
  totalChanguito(){
    return 15000;
  }

  //SELECCION DE BOTONES
  seleccionar(medio:string){
    this.seleccionado = medio;
    this.medioPago.tipo = medio;
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
  
  fechaDeHoy = new Date();
  mesHoy = this.fechaDeHoy.getMonth();
  anioHoy = this.fechaDeHoy.getFullYear();
  

  //Te chequea la tarjeta crack
  luhnAlgorithm(value:string) {
    // accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(value)) return false;
    
    // The Luhn Algorithm. It's so pretty.
        var nCheck = 0, nDigit = 0, bEven = false;
        value = value.replace(/\D/g, "");
    
        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
    
            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }
    
            nCheck += nDigit;
            bEven = !bEven;
        }
    
        return (nCheck % 10) == 0;
  }

  validezCampo(campo:string){
    if( (this.FormRegistroTarjeta.controls[campo].touched || this.submitted)
          && this.FormRegistroTarjeta.controls[campo].errors){
  
      return 'is-invalid';
    }
    else return '';
  }
  errorDePatron(campo:string){
    if( (this.FormRegistroTarjeta.controls[campo].touched || this.submitted)
          && this.FormRegistroTarjeta.controls[campo].hasError('pattern'))
    return true;

    else return false;
  }
  errorDeRequerido(campo:string){
    if( (this.FormRegistroTarjeta.controls[campo].touched || this.submitted)
          && this.FormRegistroTarjeta.controls[campo].hasError('required'))
    return true;

    else return false;
  }
    

  //PATRONES DE VALIDACION

  FormPagoEfectivo = new FormGroup({
    Monto: new FormControl('',[
      Validators.pattern('[0-9]*'),
      Validators.required,
      Validators.min(this.totalChanguito()),
      Validators.max(20000),
    ])
  });

  FormRegistroTarjeta = new FormGroup({
    NombreApellido: new FormControl('',[
      Validators.required,
    ]),
    NumeroTarjeta: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}'
      )
    ]),
    Vencimiento: new FormControl('',[
      Validators.required,
      Validators.pattern(
        '(0[1-9]|1[012])[-/](20)[2-3][0-9]'
      ),
    ]),
    CodigoSeguridad: new FormControl('',[
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3),
    ])
  });


}
