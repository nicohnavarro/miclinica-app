import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private authSvc: AuthService, private _snackBar:MatSnackBar,private router:Router) { }

  ngOnInit() { }

  async ObtenerUsuario(user: User) {
      console.log(user);
      await this.authSvc.register(user.mail, user.password).catch(err => {this.openSnackBar(err,'Uops!');});
      this.openSnackBar('Usuario registrado con exito!','Ir a la home!')
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);

  }


  openSnackBar(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 2000,
    });
    snackBarRef.afterDismissed().subscribe(() => {
      //console.log('The snack-bar was dismissed');
    });
  
    snackBarRef.onAction().subscribe(() => {
      //console.log('The snack-bar action was triggered!');
      this.router.navigate(['/home']);
    });
  }

}
