import { Component, Input, OnInit } from '@angular/core';
import { Dias } from 'src/app/utils/dias.enum';

@Component({
  selector: 'app-combo-dia-horario',
  templateUrl: './combo-dia-horario.component.html',
  styleUrls: ['./combo-dia-horario.component.scss']
})
export class ComboDiaHorarioComponent implements OnInit {
  @Input() eligio_medico:boolean; 
  @Input() dias:Dias[];

  constructor() { }

  ngOnInit(): void {
  }

}
