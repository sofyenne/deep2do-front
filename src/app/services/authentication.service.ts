import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  constructor(private http: HttpClient, private route: Router  ) { }


  login(user : any ):Observable<any> {
    return  this.http.post(`${environment.apiUrl}/auth/login`, user ,{withCredentials : true})
  };

  logout() : Observable<any>{
    return this.http.post(`${environment.apiUrl}/auth/logout`,{},{withCredentials : true})
  
  };

  register(user: any ):Observable<any>{
    return this.http.post(`${environment.apiUrl}/users/register`, user)

  }
  getcurrentuser() : Observable<any>{
    return this.http.get(`${environment.apiUrl}/auth/user`,{withCredentials : true})
  }
  getalluser() : Observable<any>{
    return this.http.get(`${environment.apiUrl}/auth/users`)
  }
  deleteuser(id : number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/auth/users/${id}`)
  }
  updateuser(id : number , user : any): Observable<any>{
    return this.http.put(`${environment.apiUrl}/auth/users/${id}` , user)
  }
}
