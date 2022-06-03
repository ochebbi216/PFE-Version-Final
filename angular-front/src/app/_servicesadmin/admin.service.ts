import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../_classesadmin/admin'
import { AuthService } from './auth.service';
import { EndpointService } from '../services/endpoint.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private endpoint:EndpointService, private authService: AuthService) { }

  registerUser(user: Admin): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post("http://localhost:3000/api/v1/admin/register", user, {headers: headers});
  }
  getbyid ( id: any ){
  
    return this.http.get (this.endpoint.url + 'admin/getbyid/' + id);
   }
   addimage (id:any,user: any ){
 
    return this.http.put (this.endpoint.url + 'admin/updateimg/'+id, user);
   }
   update ( id: any , user:any){
  
    return this.http.put (this.endpoint.url + 'admin/update/' +id, user);
   }
   getall ( ){
  
    return this.http.get(this.endpoint.url + 'admin/all');
   }
  getProfile(): Observable<any> {
    this.authService.loadToken();
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.authToken
    });
    return this.http.get("http://localhost:3000/api/v1/admin/profile", {headers: headers});
  }
}
