import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  usuario;
  verificado: boolean;
  lista
  constructor(private authSvc: AuthService,private UserSvc:UserService) {
    if(this.authSvc.user){
      this.usuario=this.authSvc.user;
      this.verificado = this.authSvc.user.emailVerified;

    }
  }
  ngOnInit(): void {

  }

}
