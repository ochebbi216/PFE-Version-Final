import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Admin } from '../_classesadmin/admin'
import { LoginDataA } from '../_classesadmin/login-dataA';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  loginData: LoginDataA ;
  admin: Admin ;
helper=new JwtHelperService()
  constructor(private http: HttpClient) {}

  authenticateUser(loginData: LoginDataA): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.http.post("http://localhost:3000/api/v1/admin/login", loginData, {headers: headers});
  }

  storeUserData(token, admin) {
    // let tokenDecode=this.helper.decodeToken(token)
    localStorage.setItem("Atoken", token);
    // localStorage.setItem("admin", JSON.stringify(admin));
    // localStorage.setItem("firstname", tokenDecode.firstname)
    // localStorage.setItem("lastname", tokenDecode.lastname)
    // localStorage.setItem("email", tokenDecode.email)
 
    this.authToken = token;
    this.admin = admin;
  }
getfirstname(){
  let token=localStorage.getItem('Atoken')
  let tokenDecode=this.helper.decodeToken(token)
return tokenDecode.firstname
}
getlastname(){
  let token=localStorage.getItem('Atoken')
  let tokenDecode=this.helper.decodeToken(token)
return tokenDecode.lastname
}
getemail(){
  let token=localStorage.getItem('Atoken')
  let tokenDecode=this.helper.decodeToken(token)
return tokenDecode.email
}
getcreatedDate(){
  let token=localStorage.getItem('Atoken')
  let tokenDecode=this.helper.decodeToken(token)
return tokenDecode.createdDate
}
getrole() {
  let token=localStorage.getItem('Atoken')
  let tokenDecode=this.helper.decodeToken(token)
  if(tokenDecode.isAdmin==true){
    return tokenDecode.isAdmin
  }
}
getid() {
  let token=localStorage.getItem('Atoken')
  let tokenDecode=this.helper.decodeToken(token)
    return tokenDecode._id
}
  logout() {
    this.authToken = null;
    this.admin = null;
    this.deleteToken();
  }

  setToken(token: string) {
    localStorage.setItem('Atoken', token);
  }
  // getinfo() {
  //   return localStorage.getItem('admin');
  // }
  loadToken() {
    this.authToken = localStorage.getItem("Atoken");
    
  }
  getToken() {
    return localStorage.getItem('Atoken');
  }
  deleteToken() {
    localStorage.removeItem('Atoken');
    localStorage.removeItem('admin');
  }
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  loggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload )
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}