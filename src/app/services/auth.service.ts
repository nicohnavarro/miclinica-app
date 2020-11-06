import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public user:User;

  constructor(public afAuth:AngularFireAuth) { }

  async login(email:string, password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
      return result;
    }
    catch(err){
      console.log(err);
    }
  }

  async register(email:string,password:string){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
      this.enviarMailRegistro();
      return result;
    }
    catch(err){
      console.log(err);
    }
  }

  async logout(){
    try{
      await this.afAuth.signOut();
    }
    catch(err){
      console.log(err);
    }
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  public enviarMailRegistro(){
    this.afAuth.currentUser.then( resp => {
      
      // resp.sendEmailVerification({
      //   handleCodeInApp: true,
      //   url: environment.urlVerify
      // });
    });
  }
}
