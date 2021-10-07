import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { CartserviceService } from '../services/cartservice.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-deatils',
  templateUrl: './deatils.component.html',
  styleUrls: ['./deatils.component.css']
})
export class DeatilsComponent implements OnInit {
 id : any 
 product : any 
 cartitem : any
 qt : any = 1
 user : any
  constructor(private productservice : ProductsService , private router : Router , private route : ActivatedRoute ,private cartService: CartserviceService ,private http : HttpClient , private toastr : ToastrService) { }

  ngOnInit(): void {
    this.toastr.toastrConfig.positionClass = 'toast-top-center';
    this.user = JSON.parse(localStorage.getItem('currentuser') || '{}')
   
    this.id=this.route.snapshot.params.id
    this.productservice.getbyid(this.id).subscribe((res)=>{
      this.product = res 

    }, error => console.log(error))
  }

  addtocart(item: any){
    this.cartitem = {
      quantity:this.qt,
      name : this.product.name, price : this.product.price , image : this.product.image , 
       total : this.product.price * this.qt , id : this.product.id ,description :this.product.description
    }
    
    this.cartService.addtoCart(this.cartitem);
  }
  favorite(id : any){
    if(!this.user.role){this.toastr.info('you are not logged In..sign in to favorite product ')}
    else {
      this.http.put(`${environment.apiUrl}/shop/favorite/${id}` , {user : this.user.id}).subscribe((res : any)=>
      this.toastr.info(res.message ,'success'  ) , error => {console.log(error)
    this.toastr.error('product not favorite' , 'error') })
    }
    
  }

}
