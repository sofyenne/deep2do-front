import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private route: Router) { }



searchproduct(search : any ):Observable<any> {
  return  this.http.post(`${environment.apiUrl}/prod/search`, search)
};

details(product : any) : Observable<any>{
  return this.http.post(`${environment.apiUrl}/prod/add`, product)
}

getproduct():Observable<any> {
  return this.http.get(`${environment.apiUrl}/prod/get`)
}
getmostvisited():Observable<any>{
  return this.http.get(`${environment.apiUrl}/prod/visited`)
}
getlastvisited(): Observable<any>{
  return this.http.get(`${environment.apiUrl}/prod/lastvisited`)
}




}
