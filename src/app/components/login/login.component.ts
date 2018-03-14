import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AuthenticationRequestDTO, } from './../../dtos/authentication-request.dto'
import { AuthenticationResponseDTO, } from './../../dtos/authentication-response.dto'
import { RestRepositoryService } from './../../services/rest-repository.service'
import { FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
import { AlertService } from './../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';
import { WebException } from '../../models/web.exception';
import { Resource } from '../../router/resource';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticationRequestDTO = new AuthenticationRequestDTO()
  isLoading = false
  @ViewChild('f') form: any;
  error: string = null;
  returnUrl: string;

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService) {
  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  signin() {
    this.error = null;
    if (this.form.valid) {
      this.isLoading = true;
      this.authenticationService.login(this.authenticationRequestDTO).subscribe(sucesso => {
        this.form.reset();
        this.goHome();
      },
        er =>{
          this.isLoading = false;
          this.alertService.error(er)
        }
      )
    }
  }

  goHome() {
    this.router.navigate([Resource.home]); 
  }
}
