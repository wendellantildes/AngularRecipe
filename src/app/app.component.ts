import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Resource } from './router/resource';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

     constructor(private router: Router,
      private route: ActivatedRoute){
       router.events.subscribe((url:any) => {
         this.setUpPage();
        })
     }

     @Input() showNavbar = true;
     

     private setUpPage(){
       this.showNavbar =  this.router.url !== "/"+Resource.login;
       ;
     }
     
}
