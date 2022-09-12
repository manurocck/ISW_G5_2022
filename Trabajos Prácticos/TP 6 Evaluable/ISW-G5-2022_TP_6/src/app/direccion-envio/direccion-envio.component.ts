import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Direccion } from 'src/app/models/direccion';
import { Ciudades, Ciudad } from 'src/app/models/ciudad';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';




@Component({
  selector: 'app-direccion-envio',
  templateUrl: './direccion-envio.component.html',
  styleUrls: ['./direccion-envio.component.css']
})
export class DireccionEnvioComponent implements OnInit {
  
  ItemCiudad = Ciudades;
  ngOnInit(): void {
    
  }
  
  // COMUNICACIÓN CON EL COMPONENTE PRINCIPAL

  @Output() estado = new EventEmitter<string>();
  siguiente(){ 
    /* Hay que agregarle la lógica de submit
     * Guardar la info si es correcta y sino, dar error en los campos incorrectos
    */

    this.estado.emit('P');
    return;
  }
  
  submitted = false;
  
  constructor() { }

  // VALIDACIONES

  validezCampo(campo:string){
    if( (this.FormRegistroDireccion.controls[campo].touched || this.submitted)
          && this.FormRegistroDireccion.controls[campo].errors)
    return 'is-invalid';

    else return '';
  }
  errorDePatron(campo:string){
    if( (this.FormRegistroDireccion.controls[campo].touched || this.submitted)
          && this.FormRegistroDireccion.controls[campo].hasError('pattern'))
    return true;

    else return false;
  }
  errorDeRequerido(campo:string){
    if( (this.FormRegistroDireccion.controls[campo].touched || this.submitted)
          && this.FormRegistroDireccion.controls[campo].hasError('required'))
    return true;

    else return false;
  }
  
  // patrones de validacion
  FormRegistroDireccion = new FormGroup({
    Calle: new FormControl('', 
      [Validators.required, 
        Validators.pattern('[A-Z, a-z]{4,50}')]),
    Numero: new FormControl(null,
      [Validators.required,
       Validators.pattern('[0-9]{1,5}')]),
    Ciudad: new FormControl(true, [Validators.required]),
    Referencia: new FormControl('', [Validators.pattern('[A-Z, a-z, 0-9]{1,100}')])
  })


}
