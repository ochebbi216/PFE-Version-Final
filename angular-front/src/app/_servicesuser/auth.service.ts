import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_classesuser/user'
import { LoginData } from '../_classesuser/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  loginData: LoginData;
  user: User;
  helper=new JwtHelperService()


  constructor(private http: HttpClient) {}

  authenticateUser(loginData: LoginData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.http.post("http://localhost:3000/api/v1/user/login", loginData, {headers: headers});
  }

  storeUserData(token, user) {
    // let tokenDecode=this.helper.decodeToken(token)

    localStorage.setItem("token", token);
    // localStorage.setItem("user", JSON.stringify(user));
    // localStorage.setItem("firstname", tokenDecode.firstname)
    // localStorage.setItem("lastname", tokenDecode.lastname)
    // localStorage.setItem("email", tokenDecode.email)
    this.authToken = token;
    this.user = user;
  }
  getfirstname(){
    let token=localStorage.getItem('token')
    let tokenDecode=this.helper.decodeToken(token)
  return tokenDecode.firstname
  }
  getlastname(){
    let token=localStorage.getItem('token')
    let tokenDecode=this.helper.decodeToken(token)
  return tokenDecode.lastname
  }
  getusername(){
    let token=localStorage.getItem('token')
    let tokenDecode=this.helper.decodeToken(token)
  return tokenDecode.username
  }
  getemail(){
    let token=localStorage.getItem('token')
    let tokenDecode=this.helper.decodeToken(token)
  return tokenDecode.email
  }
  getcreatedDate(){
    let token=localStorage.getItem('token')
    let tokenDecode=this.helper.decodeToken(token)
  return tokenDecode.createdDate
  }
  getrole() {
    let token=localStorage.getItem('token')
    let tokenDecode=this.helper.decodeToken(token)
    if(tokenDecode.isAdmin==false){
      return tokenDecode.isAdmin
    }
  }
  getactivation() {
    let token=localStorage.getItem('token')
    let tokenDecode=this.helper.decodeToken(token)
      return tokenDecode.activated
  }
  getpaiment() {
    let token=localStorage.getItem('token')
    let tokenDecode=this.helper.decodeToken(token)
      return tokenDecode.paied
    
  }
  getid() {
    let token=localStorage.getItem('token')
    let tokenDecode=this.helper.decodeToken(token)
      return tokenDecode._id
  }
  getimg() {
    let token=localStorage.getItem('token')
    let tokenDecode=this.helper.decodeToken(token)
      return tokenDecode.image
  }
  logout() {
    this.authToken = null;
    this.user = null;
    this.deleteToken();
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  setuser(user:string){
    localStorage.setItem("user", JSON.stringify(user));

  }
  getuser() {
    return localStorage.getItem('user');
  }
  loadToken() {
    this.authToken = localStorage.getItem("token");
    
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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
  // profile() {
  //   var userPayload = this.getUserinfoPayload();
  //   if (userPayload)
  //     return userPayload.firstname;
  //   else
  //     return false;
  // }

  loggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}