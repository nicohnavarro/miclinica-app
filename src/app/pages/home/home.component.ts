import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  constructor(private authSvc:AuthService) { }

  ngOnInit(): void {
    this.authSvc.getCurrentUser().then(user=>{
      console.log(user.email)
      console.log(user.emailVerified)
    });
  }

}
