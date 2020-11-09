import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { SacarTurnoComponent } from './components/sacar-turno/sacar-turno.component';
import { InfoHomeComponent } from './components/shared/info-home/info-home.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadosComponent } from './pages/listados/listados.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: HomeComponent, data: {animation: 'home'},children:[
    {path: 'home',component:InfoHomeComponent},
    {path: 'listados', component:ListadosComponent},
    {path: 'sacar-turno', component:SacarTurnoComponent},
    {path: 'encuesta', component:EncuestaComponent},
  ]},
  { path: 'login', component: LoginComponent, data: {animation: 'login'} },
  { path: 'register', component: RegisterComponent, data: {animation: 'registro'} },
  { path: '**', component: HomeComponent, data: {animation: 'home'} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
