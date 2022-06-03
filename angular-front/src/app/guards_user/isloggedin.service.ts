import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_servicesuser/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsloggedinService implements CanActivate{

  constructor(private authService: AuthService, private router: Router,) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const rememberme = localStorage.getItem('rememberme');

      if (this.authService.loggedIn()==true && rememberme == 'yes' ) 
      return this.router.navigate(['/user/home']);
    else 
      return this.router.navigate(['/user/login']);;
  }

  }