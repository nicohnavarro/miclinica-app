import { Component, OnInit } from '@angular/core';
import { IMedico } from 'src/app/models/medico';
import { UserService } from 'src/app/services/user.service';
import { Dias } from 'src/app/utils/dias.enum';
import { Especialidades } from 'src/app/utils/especialidades.enum';

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.scss']
})
export class SacarTurnoComponent implements OnInit {

  turno_especialidad: Especialidades;
  turno_medico: IMedico;
  turno_dia:string;
  lista_medicos: IMedico[];
  lista_filtrada_medicos: IMedico[];
  lista_filtrada_dias: string[];
  tiene_especialidad: boolean = false;
  tiene_medico: boolean = false;
  constructor(private userSvc: UserService) {
    this.lista_medicos = [];
    this.lista_filtrada_medicos = [];
    this.userSvc.getMedicos().subscribe(data => {
      this.lista_medicos = data;
    })
  }

  ngOnInit(): void {
  }

  mandamosEspecialidad(especialidad: Especialidades) {
    this.cleanFilter();
    this.turno_especialidad = especialidad;
    this.filtrarMedicosByEspecialidad(especialidad);
    this.tiene_especialidad = true;
  }

  mandamosMedico(medico: IMedico) {
    this.turno_dia = null;
    this.turno_medico = medico;
    this.filtrarDiasByMedico(medico);
    this.tiene_medico = true;
  }

  mandamosDia(dia:string){
    this.turno_dia = dia;
  }

  filtrarMedicosByEspecialidad(especialidad: Especialidades) {
    let filtrada = this.lista_medicos.filter(medico => {
      if (medico.especialidades.includes(especialidad.toString()))
        return medico;
    });
    this.lista_filtrada_medicos = filtrada;
  }

  filtrarDiasByMedico(medico: IMedico) {
    let dias = medico.dias_laborables.map(dia =>{
      return dia.split('=')[0];
    }).map(dia => {
      return Dias[+dia[0]];
    });
    this.lista_filtrada_dias= dias;
  }

  cleanFilter() {
    this.tiene_especialidad = false;
    this.lista_filtrada_medicos = [];
    this.turno_medico = null;
    this.tiene_medico = false;
    this.lista_filtrada_dias = [];
  }

}
