import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  usuario;
  verificado: boolean;
  constructor(private authSvc: AuthService) {
    if(this.authSvc.user){
      this.usuario=this.authSvc.user;
      this.verificado = this.authSvc.user.emailVerified;
    }
  }
  ngOnInit(): void {

  }

}
