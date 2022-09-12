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

  //NAVEGACIÓN DE BOTONES
  
  @Output() estado = new EventEmitter<string>();
  
  volver(){
    this.estado.emit('D');
  }

  //VALIDACIONES

  validezCampo(campo:string){
    if( (this.FormRegistroTarjeta.controls[campo].touched || this.submitted)
          && this.FormRegistroTarjeta.controls[campo].errors)
    return 'is-invalid';

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

  FormRegistroTarjeta = new FormGroup({
    NumeroTarjeta: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}'
      )
    ]),
    Vencimiento: new FormControl('',[
      Validators.required,
      Validators.pattern(
        '(0[1-9]|1[012])[-/](20)[0-9]{2}'
      )
    ]),
    CodigoSeguridad: new FormControl('',[
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3),
    ])
  });

  submitted = false;
  
  siguiente(){ 
    /* Hay que agregarle la lógica de submit
     * Guardar la info si es correcta y sino, dar error en los campos incorrectos
    */




    this.estado.emit('E');
    return;
  }

}
