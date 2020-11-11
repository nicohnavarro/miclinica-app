import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMedico } from 'src/app/models/medico';

@Component({
  selector: 'app-combo-profesional',
  templateUrl: './combo-profesional.component.html',
  styleUrls: ['./combo-profesional.component.scss']
})
export class ComboProfesionalComponent implements OnInit {

  @Input() eligio_especialidad:boolean; 
  @Input() medicos:IMedico[];
  @Output() seleccionaMedico:EventEmitter<IMedico> = new EventEmitter<IMedico>();
  
  constructor() {
  }

  ngOnInit(): void {
  }

  onOptionsSelected(medico:IMedico){
    this.seleccionaMedico.emit(medico);
  }

}
