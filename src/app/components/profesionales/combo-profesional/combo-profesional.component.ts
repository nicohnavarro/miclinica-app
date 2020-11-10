import { Component, Input, OnInit } from '@angular/core';
import { IMedico } from 'src/app/models/medico';
import { UserService } from 'src/app/services/user.service';
import { Especialidades } from 'src/app/utils/especialidades.enum';

@Component({
  selector: 'app-combo-profesional',
  templateUrl: './combo-profesional.component.html',
  styleUrls: ['./combo-profesional.component.scss']
})
export class ComboProfesionalComponent implements OnInit {

  @Input() eligio_especialidad:boolean; 
  @Input() medicos:IMedico[];
  constructor() {
  }

  ngOnInit(): void {
  }

}
