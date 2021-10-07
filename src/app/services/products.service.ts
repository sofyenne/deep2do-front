import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
searchValue : any 
  constructor(private http: HttpClient, private route: Router) { }
 createproduct(prod : any):Observable<any> {
  return  this.http.post(`${environment.apiUrl}/shop/prod` , prod)
};
  getallproduct():Observable<any> {
    return  this.http.get(`${environment.apiUrl}/shop/prod`)
  };
  getallcategory():Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/allcategory`)
  };
  getbyid(id : number) : Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/prod/${id}`)
  }
  deleteproduct(id : number) : Observable<any>{
    return this.http.delete(`${environment.apiUrl}/shop/prod/${id}`)
  }
  updateproduct(id : number ,  product : any) : Observable<any>{
    return this.http.put(`${environment.apiUrl}/shop/prod/${id}`, product)
  }
  getnewlyadd() : Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/newly`)
  }
  getmostselling() : Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/selling`)
  }
  getbycatname(id : number) : Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/prodbycat/${id}`)
  }
  createcomande(checkoutform : any ) : Observable<any>{
    return this.http.post(`${environment.apiUrl}/shop/createorder/`,checkoutform)
  }

  cerateorderitem(listitem : any[]): Observable<any>{
    return this.http.post(`${environment.apiUrl}/shop/createitem/`,{"orderitem" : listitem})
  }

  getorder(userid : number) : Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/orderall/${userid}`)
  }
  getorderitem(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/allitem`)
  }
  getallorder(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/getallorder/`)
  }
  getcategory(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/category/`)
  }
  createcategoiry(category : any ): Observable<any>{
    return this.http.post(`${environment.apiUrl}/shop/category/` , category)
  }
  deletecategory(id : number) :Observable<any>{
    return this.http.delete(`${environment.apiUrl}/shop/category/${id}`)
  }
  updatvategory(id : number , category : any): Observable<any>{
    return this.http.put(`${environment.apiUrl}/shop/category/update/${id}` , category)
  }
  getadressnyId(id : number): Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/delivery/${id}`)
  }
  getadresByOrder(id : number): Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/deliveryByOrder/${id}`)
  }
  confirmorder(id : any ): Observable<any>{
    return this.http.put(`${environment.apiUrl}/shop/orderGA/${id}`,{})
  }
  cancelorder(id : any ): Observable<any>{
    return this.http.put(`${environment.apiUrl}/shop/cancel/${id}`,{})
  }

  getOrderById(id : any): Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/orderGA/${id}`)
  }
  getorderItemById(id : any) : Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/allitemById/${id}`)
  }
  getalladresse(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/shop/delivery/`)
  }
}
