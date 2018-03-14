import { Injectable } from '@angular/core';
import { RestRepositoryService } from './rest-repository.service';
import { AuthenticationRequestDTO } from '../dtos/authentication-request.dto';
import { AuthenticationResponseDTO } from '../dtos/authentication-response.dto';
import { WebException } from '../models/web.exception';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { StorageConstants } from '../storage/storage.constants';

@Injectable()
export class AuthenticationService {

  constructor(private restRepository: RestRepositoryService) { }
  usuario = "";
  login(autenticacaoRequestDTO : AuthenticationRequestDTO){
      return this.restRepository.post("authentication", autenticacaoRequestDTO).map(
        res => {
          var response = res.json() as AuthenticationResponseDTO;
          console.log(response.token)
          localStorage.setItem(StorageConstants.token, JSON.stringify(response.token));
        },
        msg => {
          console.error(`Error: ${msg.status} ${msg.statusText}`);
          throw new WebException().message = `Error: ${msg.status} ${msg.statusText}`;
        })
  }

  logout(){
    localStorage.removeItem(StorageConstants.token);
  }

}
