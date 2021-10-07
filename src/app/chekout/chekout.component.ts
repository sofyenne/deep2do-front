import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';
import { CartserviceService } from '../services/cartservice.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css']
})
export class ChekoutComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  checkoutForm! : FormGroup
  order : any
  user : any
  listcartitem :any = []
  cartitem = {
    nameprod : '' ,
    qt : '' , 
    price : 0 ,
    prodid : 0 , 
    order : 0
}
adresslist: any =[]
  idorder!: number;

  constructor(private router : Router,private authService :AuthenticationService ,private cartService : CartserviceService ,private formBuilder: FormBuilder,private  productservice : ProductsService , private http : HttpClient , private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getcurrent()
  
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
    this.checkoutForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', Validators.required],
      date: ['', [Validators.required]],
      cashdelivery:['',[]],
      delivery:['',[]],
      user: ['',[]],
      total: ['',[]],
      etat: ['',[]],
  });


  

  }

  get f() { return this.checkoutForm.controls; }


  checkout(){
   this.f['user'].setValue(this.user.id)
   this.f['total'].setValue(this.grandTotal)
   this.f['etat'].setValue('running')
    console.log(this.checkoutForm.value)
    this.productservice.createcomande(this.checkoutForm.value).subscribe((res)=>{
      this.order = res
     this.idorder = res.id
      const newArray = this.products.map((item :any) => {
        return { prodid: item.id, qt: item.quantity  , nameprod:item.name , order:res.id , price : item.price};
      });
      console.log(newArray)
      this.productservice.cerateorderitem(newArray).subscribe((res)=>{
        console.log('done')
        
      }, error => console.log(error))
      this.router.navigate(['/profile/order'])
      this.toastr.success('order created')
      
    }, error => {console.log(error) 
    this.toastr.error(error.message)});
    
    setTimeout(() => { this.productservice.confirmorder(this.idorder).subscribe((res)=>{
      
    } , error => console.log(error)) }, 24000);
  

  };

  getcurrent() : void {
    this.authService.getcurrentuser().subscribe((res : any)=> {
         this.user = res ; 
         let userId = res.id
         this.http.get(`${environment.apiUrl}/shop/delivery/${userId}`).subscribe((res)=>{
            this.adresslist=res
         }, error => console.log(error))
    } , error => console.log(error)
     ) }
  

   

}
