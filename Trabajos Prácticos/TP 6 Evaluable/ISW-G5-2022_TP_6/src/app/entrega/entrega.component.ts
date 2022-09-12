import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TiposEntregas } from 'src/app/models/formaentrega';
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

  ItemsFormaEntrega = TiposEntregas;
  ngOnInit(): void {
    
  }
  
  submitted = false;
  
  @Output() estado = new EventEmitter<string>();
  siguiente(){ 
    /* Hay que agregarle la lógica de submit
     * Guardar la info si es correcta y sino, dar error en los campos incorrectos
    */

    this.estado.emit('P');
    return;
  }


  //LÓGICA DE INTERFAZ
  quiereFechaYHora(){
    if(this.FormFormaEntrega.value.Forma == 'Seleccionar fecha y hora'){
      return true;
    }
    return false;
  }


  //SELECCION DE BOTONES


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
  
 

}


