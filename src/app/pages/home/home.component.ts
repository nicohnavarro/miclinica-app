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
  usuario: User;
  verificado: boolean;
  constructor(private authSvc: AuthService) {
    this.usuario = new User();
    this.verificado = false;
    this.authSvc.getCurrentUser().then(user => {
      this.usuario.mail = user.email;
      this.verificado = user.emailVerified
    }).catch(err=>{console.log(err)});
  }
  ngOnInit(): void {

  }

}
