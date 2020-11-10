import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Especialidades } from 'src/app/utils/especialidades.enum';

@Component({
  selector: 'app-alta-turno',
  templateUrl: './alta-turno.component.html',
  styleUrls: ['./alta-turno.component.scss']
})
export class AltaTurnoComponent implements OnInit {

  @Output() seleccionaEspecialidad:EventEmitter<Especialidades> = new EventEmitter<Especialidades>();
  especialidades=Especialidades
  constructor() {
   }

  ngOnInit(): void {
  }

  onOptionsSelected(especialidad){
    this.seleccionaEspecialidad.emit(especialidad);
  }
}
