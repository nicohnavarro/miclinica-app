import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITurno } from '../models/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private db:AngularFirestore) { }

  getTurnos(): Observable<ITurno[]> {
    return this.db.collection<ITurno>('turnos').valueChanges({idField: 'docId'});
  }

  agregarTurno(turno: ITurno): void {
    this.db.collection<ITurno>('turnos').add(turno);
  }
}
