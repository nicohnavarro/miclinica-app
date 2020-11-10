import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITurno } from '../models/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private db:AngularFirestore) { }

  getAdmins(): Observable<ITurno[]> {
    return this.db.collection<ITurno>('administradores').valueChanges({idField: 'docId'});
  }

  agregarAdmin(turno: ITurno): void {
    this.db.collection<ITurno>('turnos').add(turno);
  }
}
