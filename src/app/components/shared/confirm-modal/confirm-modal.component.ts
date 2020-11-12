import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ITurno } from 'src/app/models/turno';
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  turno:ITurno;
  cargando:boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {turno}) {

    this.turno=data.turno;
    this.cargando=false;
    console.log(data)
    setTimeout(() => {
      this.cargando=false;
    }, 7000)
   }

  ngOnInit(): void {
  }

  confirmarTurno(){
    this.cargando= true;
    console.log(this.turno);
  }
}
