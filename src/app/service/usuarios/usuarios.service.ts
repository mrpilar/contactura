  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Authentication, User } from 'src/app/models/user/user.component';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private dataEdit = new BehaviorSubject<User>(null);
  botaoEdit = this.dataEdit.asObservable();

  constructor(private http: HttpClient) {
    console.log('socorro')
   }

    api_url = environment.api_url;
   
  authentication(authentication: Authentication) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(authentication.username + ':' + authentication.password)});
    return this.http.get(this.api_url + 'user/login', {headers, responseType: 'text' as 'text'}).pipe (
      map(
        authData =>  {
        return authData;
        }
        )
    );
      }
      
    getUsersList(usuarios:User){
      this.dataEdit.next(usuarios);
    }
}