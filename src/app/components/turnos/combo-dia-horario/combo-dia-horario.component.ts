import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dias } from 'src/app/utils/dias.enum';

@Component({
  selector: 'app-combo-dia-horario',
  templateUrl: './combo-dia-horario.component.html',
  styleUrls: ['./combo-dia-horario.component.scss']
})
export class ComboDiaHorarioComponent implements OnInit {
  @Input() eligio_medico: boolean;
  @Input() dias: string[];
  @Input() dia_mostrar: string;
  @Output() seleccionaDia: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onOptionsSelected(dia: string) {
    this.seleccionaDia.emit(dia);
  }
}
