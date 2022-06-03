import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../_classesuser/user'
import { EndpointService } from '../services/endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService ,private endpoint : EndpointService ) { }

  registerUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post("http://localhost:3000/api/v1/user/register", user, {headers: headers});
  }
  create (user: any ){
 
    return this.http.post (this.endpoint.url + 'user/add', user);
   }
   addimage (id:any,user: any ){
 
    return this.http.put (this.endpoint.url + 'user/updateimg'+id, user);
   }
   getall ( ){
  
    return this.http.get(this.endpoint.url + 'user/all');
   }
  
   getbyid ( id: any ){
  
    return this.http.get (this.endpoint.url + 'user/getbyid/' + id);
   }
  
  //  getbyfistname ( firstname: any ){
  
  //    return this.http.get (this.endpoint.url + 'user/getbyfirstname/' + firstname);
  //   }
 
   delete ( id: any ){
  
    return this.http.delete (this.endpoint.url + 'user/delete/' + id);
   }
  
  
   update ( id: any , user:any){
  
    return this.http.put (this.endpoint.url + 'user/update/' +id, user);
   }
   getProfile(): Observable<any> {
    this.authService.loadToken();
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.authToken
    });
    return this.http.get("http://localhost:3000:api/v1/user/profile", {headers: headers});
  }
}
