import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Resource } from '../../router/resource';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  public logout(){
    this.authenticationService.logout();
    this.router.navigate([Resource.login]);
  }

}
