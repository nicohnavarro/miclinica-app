import { Injectable } from '@angular/core';
import { IUser, User } from '../models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IMedico } from '../models/medico';
import { IPaciente } from '../models/paciente';
import { IAdmin } from '../models/admin';
import { Dias } from '../utils/dias.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFirestore) { }

  getAdmins(): Observable<IAdmin[]> {
    return this.db.collection<IAdmin>('administradores').valueChanges({idField: 'docId'});
  }

  agregarAdmin(user: User): void {
    let admin:IAdmin = {
      name:user.name,
      surname:user.surname,
      address:user.address,
      age:user.age,
      mail:user.mail,
      password:user.password,
      first_image:user.first_image,
      second_image:user.second_image,
      type: 'Admin'
    }
    this.db.collection<IAdmin>('administradores').add(admin);
  }

  getPacientes(): Observable<IPaciente[]> {
    return this.db.collection<IPaciente>('pacientes').valueChanges({idField: 'docId'});
  }

  agregarPaciente(user: User): void {
    let paciente:IPaciente = {
      name:user.name,
      surname:user.surname,
      address:user.address,
      age:user.age,
      mail:user.mail,
      password:user.password,
      first_image:user.first_image,
      second_image:user.second_image,
      type: 'Paciente'
    }
    this.db.collection<IPaciente>('pacientes').add(paciente);
  }

  getMedicos(): Observable<IMedico[]> {
    return this.db.collection<IMedico>('medicos').valueChanges({idField: 'docId'});
  }

  agregarMedico(user: User): void {
    let medico:IMedico = {
      name:user.name,
      surname:user.surname,
      address:user.address,
      age:user.age,
      mail:user.mail,
      password:user.password,
      first_image:user.first_image,
      second_image:user.second_image,
      type: 'Medico',
      validado:false,
      dias_laborables:[Dias.LUNES+'=9:00,10:00'],
      especialidades:user.especializaciones
    }
    this.db.collection<IMedico>('medicos').add(medico);
  }

}
