import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_servicesadmin/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private authService:AuthService , private router: Router ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.authService.getToken();
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      if (tokenDecode.isAdmin && this.authService.loggedIn()==true) return true;
    }
    this.router.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}})
    this.authService.deleteToken();
    return false;
  }
  }

//   canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return new Promise((resolve,reject)=>{
//       if(this.authService.loggedIn()==true){
//       resolve(true)
//     }
//     else{
//       this.router.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}})
//       this.authService.deleteToken();
//       resolve(false)

//     }
//     })
   
//   }
// }


  //   canActivate( ){
  //     if (!this.authService.loggedIn()) {
  //       this.router.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}});
  //       this.authService.deleteToken();
  //       return false;
  //     }
  //   return true;
  // }