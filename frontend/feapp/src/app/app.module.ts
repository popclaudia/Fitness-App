import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpAuthInterceptor } from './login/httpauth.interceptor';
import { StartpageComponent } from './startpage/startpage.component';
import { SportsComponent } from './sports/sports.component';
import { HomeComponent } from './home/home.component';
import { OrarComponent } from './orar/orar.component';
import { ProgramariComponent } from './programari/programari.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    StartpageComponent,
    SportsComponent,
    HomeComponent,
    OrarComponent,
    ProgramariComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    },
    JwtHelperService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
