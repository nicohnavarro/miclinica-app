import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  esAdmin:boolean=false;
  esMedico:boolean=false;
  esPaciente:boolean=false;
  showFiller = false;
  usuario;
  verificado: boolean;
  lista
  constructor(private authSvc: AuthService,private UserSvc:UserService) {
    if(this.authSvc.user){
      this.usuario=this.authSvc.user;
      console.log(this.usuario)
      this.verificado = this.authSvc.user.emailVerified;
    }
  }
  ngOnInit(): void {

  }

}
