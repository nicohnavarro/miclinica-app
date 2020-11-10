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
  constructor(private userSvc:UserService) { 
    this.lista_medicos=[];
    this.userSvc.getMedicos().subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

  mandamosEspecialidad(especialidad:Especialidades){
    this.turno_especialidad=especialidad;
  }

  filtrarMedicosByEspecialidad(especialidad:Especialidades){
    this.lista_medicos
  }

}
