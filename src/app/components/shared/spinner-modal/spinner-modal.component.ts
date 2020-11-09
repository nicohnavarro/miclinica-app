import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spinner-modal',
  templateUrl: './spinner-modal.component.html',
  styleUrls: ['./spinner-modal.component.scss']
})
export class SpinnerModalComponent implements OnInit {
cargando:boolean;
  constructor(private router:Router) { 
    this.cargando=true;
    setTimeout(() => {
      this.cargando=false;
    }, 7000);
  }

  ngOnInit(): void {
  }

  IrHome(){
    this.router.navigate(['/home']);
  }

}
