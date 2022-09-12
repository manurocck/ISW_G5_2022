import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Direccion , Ciudades } from 'src/app/models/direccion';
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
  @Output() info = new EventEmitter<Direccion>();
  direccion = new Direccion();

  siguiente(){ 
    if(!this.FormRegistroDireccion.invalid){
      //PERSISTE
      this.direccion.Calle = this.FormRegistroDireccion.value.Calle;
      this.direccion.Numero = parseInt(this.FormRegistroDireccion.value.Numero);
      this.direccion.Ciudad = this.FormRegistroDireccion.value.Ciudad;
      this.direccion.Referencia = this.FormRegistroDireccion.value.Referencia;
      this.info.emit(this.direccion);
      //Redirige a ENTREGA
      this.estado.emit('E');
      return;
    }
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
