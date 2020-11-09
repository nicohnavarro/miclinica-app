import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
@Output() openSidebar:EventEmitter<any> = new EventEmitter();
@Input() usuario;
ingreso_usuario:boolean;

  constructor(private router:Router,private authSvc:AuthService) { 
    this.ingreso_usuario =false;
  }

  ngOnInit(): void {
  }

  async logOut(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login'])
    }
    catch(err){
      console.log(err);
    }
  }

  goLogin(){
    this.router.navigate(['/login']);
  }

  activateSidebar(){
    this.openSidebar.emit('Abri el sideBar');
    console.log()
  }

}
