import { Component, OnInit } from '@angular/core';
import { Especialidades } from 'src/app/utils/especialidades.enum';

@Component({
  selector: 'app-alta-turno',
  templateUrl: './alta-turno.component.html',
  styleUrls: ['./alta-turno.component.scss']
})
export class AltaTurnoComponent implements OnInit {

  constructor() { }
  especialidades:Especialidades

  ngOnInit(): void {
  }

}
