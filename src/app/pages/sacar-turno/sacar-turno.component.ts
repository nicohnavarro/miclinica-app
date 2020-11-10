import { Component, OnInit } from '@angular/core';
import { IMedico } from 'src/app/models/medico';
import { UserService } from 'src/app/services/user.service';
import { Especialidades } from 'src/app/utils/especialidades.enum';

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.scss']
})
export class SacarTurnoComponent implements OnInit {

  turno_especialidad:Especialidades;
  lista_medicos:IMedico[];
  lista_filtrada:IMedico[];
  tiene_especialidad:boolean=false;
  constructor(private userSvc:UserService) { 
    this.lista_medicos=[];
    this.lista_filtrada = [];
    this.userSvc.getMedicos().subscribe(data=>{
      this.lista_medicos=data;
    })
  }

  ngOnInit(): void {
  }

  mandamosEspecialidad(especialidad:Especialidades){
    this.turno_especialidad=especialidad;
    this.filtrarMedicosByEspecialidad(especialidad);
    this.tiene_especialidad=true;

  }

  filtrarMedicosByEspecialidad(especialidad:Especialidades){
    let filtrada = this.lista_medicos.filter(medico=>{ 
      if(medico.especialidades.includes(especialidad.toString())) 
      return medico;
    })
    this.lista_filtrada = filtrada;
  }

}
