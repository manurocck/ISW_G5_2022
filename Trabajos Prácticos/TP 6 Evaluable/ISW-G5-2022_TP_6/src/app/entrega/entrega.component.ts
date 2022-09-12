import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormaEntrega } from 'src/app/models/formaentrega';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

  ItemFormaEntrega = FormaEntrega;
  ngOnInit(): void {
    
  }
  seleccionado = 'Lo antes posible';
//


  //SELECCION DE BOTONES
  seleccionar(medio:string){
    this.seleccionado = medio;
  }
  AntesPosible(){
    if (this.seleccionado == 'Lo antes posible'){
      return 'seleccionado';
    } else return '';
  }
  FechaHora(){
    if (this.seleccionado == 'Seleccionar Fecha y Hora'){
      return 'seleccionado';
    } else return '';
  }

  //VALIDACIONES

  validezCampo(campo:string){
    if( (this.FormFechaHora.controls[campo].touched || this.submitted)
          && this.FormFechaHora.controls[campo].errors)
    return 'is-invalid';

    else return '';
  }

  //PATRONES DE VALIDACIÓN

  FormFormaEntrega = new FormGroup({
    Forma: new FormControl(true, [Validators.required]),
  })

  FormFechaHora = new FormGroup({
    Fecha: new FormControl('',[
      Validators.required,
      Validators.maxLength(7),
      Validators.minLength(7),
    ]),
    Hora: new FormControl('',[
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3),
      Validators.pattern(
        '0[0-9]|1[0-9]|2[0-3]\:[0-5][0-9]'
      )
    ])
  });
  
  submitted = false;
  
  @Output() estado = new EventEmitter<string>();
  siguiente(){ 
    /* Hay que agregarle la lógica de submit
     * Guardar la info si es correcta y sino, dar error en los campos incorrectos
    */

    this.estado.emit('P');
    return;
  }


}


