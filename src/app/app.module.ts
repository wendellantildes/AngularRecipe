import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { RestRepositoryService } from './services/rest-repository.service';
import { AlertService } from './services/alert.service';


import { AppComponent } from './app.component';

import { RouterModule }   from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationRequestDTO} from './dtos/authentication-request.dto';
import {AuthenticationResponseDTO} from './dtos/authentication-response.dto';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './directives/alert/alert.component';
import { routing }        from './router/app.routing';
import { AuthGuard } from './guards/auth.guard';
import { WebException } from './models/web.exception';
import { AuthenticationService } from './services/authentication.service';
import { MasterpageComponent } from './components/masterpage/masterpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    MasterpageComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule, 
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    RestRepositoryService,
    AlertService,
    AuthenticationRequestDTO,
    AuthenticationResponseDTO,
  WebException],
  bootstrap: [AppComponent]
})
export class AppModule { }
