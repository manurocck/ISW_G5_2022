import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
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
  
  submitted = false;
  
  Mensaje = "Revisar los datos ingresados..."
  siguiente(){ 
    

    //FORMULARIOS SON VÁLIDOS
    if(!this.FormPagoEfectivo.invalid || !this.FormPagoEfectivo.invalid){
      
    }

    this.estado.emit('D');
    return;
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

  //NAVEGACIÓN DE BOTONES
  
  @Output() estado = new EventEmitter<string>();
  
  volver(){
    this.estado.emit('D');
  }

  //VALIDACIONES

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
      )
    ]),
    CodigoSeguridad: new FormControl('',[
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3),
    ])
  });


}
