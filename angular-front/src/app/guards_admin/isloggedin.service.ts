import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_servicesadmin/auth.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class IsloggedinServiceA implements CanActivate{

  constructor(private authService: AuthService, private router: Router,) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.loggedIn()==true) {
      this.router.navigate(['/admin/dashboard']);
      return true;
    }
    else {
      this.router.navigate(['/admin/login']);
      return false;
  }
}}

  