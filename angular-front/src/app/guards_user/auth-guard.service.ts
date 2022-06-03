import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_servicesuser/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.authService.getToken();
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      if (tokenDecode.isAdmin==false &&  this.authService.loggedIn()==true && tokenDecode.activated==true ) return true;
    }
    this.router.navigate(['/user/login'],{queryParams:{returnUrl:state.url}})
    this.authService.deleteToken();
    return false;
  }
  }

  // && tokenDecode.paied==true
