import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, 
 CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
  
    public router: Router , private toastr : ToastrService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
 
     let jwt = localStorage.getItem('jwt')
     let user = JSON.parse(localStorage.getItem('currentuser')||'{}')
     let role = route.data.Role
    if (jwt) {
      if(role && user.role){
        if (role == user.role ){
          return true
        }else {
          this.toastr.info('You are not allowed to this page create a count client and take it ')
          return false
        }  

      }
      return true
    } 
 // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { 'redirectURL': state.url } });
    return false;
}
}