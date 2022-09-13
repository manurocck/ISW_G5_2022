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

  seleccionForma = 'loAntesPosible';
  ngOnInit(): void {
    
  }
  
  submitted = false;
  
  //COMUNICACION CON COMPONENTE PRINCIPAL
  @Output() estado = new EventEmitter<string>();
  @Output() info = new EventEmitter<FormaEntrega>();

  ingresoEntrega = new FormaEntrega();

  siguiente(){ 
    if(this.seleccionForma=='loAntesPosible'){
      this.ingresoEntrega.tipo = 'Lo antes posible';
    }
    else if (this.seleccionForma=='fechaYhora'){
      this.ingresoEntrega.tipo = 'Fecha y hora';
      this.ingresoEntrega.fecha = this.FormFechaHora.value.Fecha;
      this.ingresoEntrega.hora = this.FormFechaHora.value.Hora;
    }
      
    this.info.emit(this.ingresoEntrega);
    this.estado.emit('F');

    return;
  }
  
  volver(){
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

  //VALIDACIONES

  validezCampo(campo:string){
    if( (this.FormFechaHora.controls[campo].touched || this.submitted)
          && this.FormFechaHora.controls[campo].errors)
    return 'is-invalid';

    else return '';
  }
  errorDePatron(campo:string){
    if( (this.FormFechaHora.controls[campo].touched || this.submitted)
          && this.FormFechaHora.controls[campo].hasError('pattern'))
    return true;

    else return false;
  }
  errorDeRequerido(campo:string){
    if( (this.FormFechaHora.controls[campo].touched || this.submitted)
          && this.FormFechaHora.controls[campo].hasError('required'))
    return true;

    else return false;
  }

  //PATRONES DE VALIDACIÓN

  FormFormaEntrega = new FormGroup({
    Forma: new FormControl(true, [Validators.required]),
  })

  FormFechaHora = new FormGroup({
    Fecha: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern(
        '(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](20)[2-3][0-9]'
      ),
    ]),
    Hora: new FormControl('',[
      Validators.required,
      Validators.maxLength(5),
      Validators.minLength(5),
      Validators.pattern(
        '(0[89]|1[0-9]|2[0-2])[-:]([0-5][0-9])'
      )
    ])
  });
  

}


