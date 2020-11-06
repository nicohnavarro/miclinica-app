import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  constructor(private router:Router,private authSvc:AuthService) { }
  usuario:User;
  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  async logOut(){
    try{
      await this.authSvc.logout();
      localStorage.removeItem('usuario');
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
