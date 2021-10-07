import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchValue : any
  public totalItem : number = 0;
  currentuser : any; 
  message : any ; 
  authenticated =false ; 
  constructor(private prodServ : ProductsService, private cartService : CartserviceService, private authService : AuthenticationService ,  private router: Router,private toastr : ToastrService ) { }

  ngOnInit(): void {
    
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
 

 this.getcurrent() ;  
 Emitters.authEmitters.subscribe((auth: boolean)=>{
   this.authenticated = auth ; 
 });


}


getcurrent() : void {
  this.authService.getcurrentuser().subscribe((res : any)=> {
       this.currentuser = res ; 
       this.message = `Hi ${res.name}`
       Emitters.authEmitters.emit(true)
       Emitters.user.emit(res) ;

  } , error =>{
    this.message = 'You are not logged In'
    Emitters.authEmitters.emit(false);
  }
  ); 
}

logout(){
  this.authService.logout().subscribe(()=>{
    this.authenticated = false ; 
    this.message = 'You are not logged In'
   delete this.currentuser
   localStorage.removeItem('currentuser')
   localStorage.removeItem('jwt')
    
      this.router.navigate(['']).then(()=>{
        window.location.reload()
      });
   
    this.toastr.success('logout successfully')

  } , error => this.toastr.error('logout failed '))
}
}

