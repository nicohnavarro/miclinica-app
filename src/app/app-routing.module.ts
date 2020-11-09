import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoHomeComponent } from './components/shared/info-home/info-home.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadosComponent } from './pages/listados/listados.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, data: {animation: 'home'},children:[
    {path: '',component:InfoHomeComponent},
    {path: 'listados', component:ListadosComponent}
  ]},
  { path: 'login', component: LoginComponent, data: {animation: 'login'} },
  { path: 'register', component: RegisterComponent, data: {animation: 'registro'} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
