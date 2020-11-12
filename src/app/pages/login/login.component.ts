import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  hide = true;
  cargando = false;

  constructor(private authSvc: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onOptionsSelected(value){
    switch (value) {
      case 'admin':
        this.emailFormControl.setValue('admin@admin.com');
        this.passwordFormControl.setValue('123123');
        break;
      case 'paciente':
        this.emailFormControl.setValue('paciente@paciente.com');
        this.passwordFormControl.setValue('123123');
        break;
      case 'medico':
        this.emailFormControl.setValue('medico@medico.com');
        this.passwordFormControl.setValue('123123');
        break;
    
      default:
        break;
    }
    
  }

  async logIn() {
  try {
    this.activarSpinner();
      const auth = await this.authSvc.login(this.emailFormControl.value, this.passwordFormControl.value);
      if (auth) {
        localStorage.setItem('uid', JSON.stringify(auth.user.uid));
        this.router.navigate(['/admin/home']);
      }
      else {
        this.openSnackBar('No ingresaste una cuenta valida.', 'Registrarse');
      }
    }
    catch (err) {
      this.openSnackBar(err,'Error');
    }

  }

  openSnackBar(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 3000,
    });
    snackBarRef.afterDismissed().subscribe(() => {
      //console.log('The snack-bar was dismissed');
    });
  
    snackBarRef.onAction().subscribe(() => {
      //console.log('The snack-bar action was triggered!');
      this.router.navigate(['/register']);
    });
  }

  activarSpinner(){
    this.cargando=true;
    setTimeout(()=>this.cargando=false,3000);
  }

}
