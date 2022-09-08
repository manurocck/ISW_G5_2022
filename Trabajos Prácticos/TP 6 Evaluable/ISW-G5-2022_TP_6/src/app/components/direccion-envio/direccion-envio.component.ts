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
  
  constructor() { }

  FormRegistro = new FormGroup({
    Calle: new FormControl('', 
      [Validators.required, 
        Validators.pattern('[A-Z, a-z]{4,50}')]),
    Numero: new FormControl(null,
      [Validators.required,
       Validators.pattern('[0-9]{1,5}')]),
    Ciudad: new FormControl(true, [Validators.required]),
    Referencia: new FormControl('', [Validators.pattern('[A-Z, a-z, 0-9]{1,100}')])
  })

  submitted = false;

  ngOnInit(): void {

  }
  Siguiente(){
    this.submitted = false;
    if(this.FormRegistro.invalid)
    return;
  }

}
