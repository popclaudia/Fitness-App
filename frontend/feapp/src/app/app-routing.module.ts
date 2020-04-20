import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { StartpageComponent } from './startpage/startpage.component';
import { LoginComponent } from './login/login.component';
import { SportsComponent } from './sports/sports.component';
import { HomeComponent } from './home/home.component';
import { OrarComponent } from './orar/orar.component';
import { ProgramariComponent } from './programari/programari.component';
import { AuthNeededGuard } from './auth-needed.guard';
const routes: Routes = [
  { path: 'register',  component: RegisterComponent },
  { path: 'login',  component: LoginComponent },
  { path: '',  component: StartpageComponent },
  { path: 'sports',  component: SportsComponent, canActivate: [AuthNeededGuard] },
  { path: 'programari',  component: ProgramariComponent, canActivate: [AuthNeededGuard] },
  { path: 'orar',  component: OrarComponent, canActivate: [AuthNeededGuard] },
  { path: 'home',  component: HomeComponent, canActivate: [AuthNeededGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
