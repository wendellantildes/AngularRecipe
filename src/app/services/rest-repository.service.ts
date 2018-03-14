import { HttpModule, Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable, OnInit }    from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestRepositoryService {

  private devURL = 'http://localhost:56205/api/';
  private headers = new Headers({'Content-Type': 'application/json'});
  private opts : RequestOptions;
  constructor(private http: Http) { 
    this.opts = new RequestOptions();
    this.opts.headers = this.headers;
  }

  post(resource : string, body : any) : Observable<Response>{
      console.debug(this.opts);
      return this.http.post(this.devURL + resource,JSON.stringify(body), this.opts);
  }

}
