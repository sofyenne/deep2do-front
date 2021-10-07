import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
user : any ;
term : any
item:any=[];
orderlist : any =[]
adresslist : any =[]
productlist : any = []
orderForProv : any = []
constructor(private auth: AuthenticationService , private prodServices : ProductsService , private toastr : ToastrService ) { }

 async ngOnInit(){
  this.getalladress();
    let user=  await JSON.parse(localStorage.getItem('currentuser') || '{}');
    this.user = user
    if(user.role!='provider'){this.user = user
         this.getallorder()
         this.getallorderitem();
         this.getalladress();
     
         
       
    }else this.getforprovider(user)

  }  
    


getallorder(): void {
   this.prodServices.getallorder().subscribe((res : any )=>{
     this.orderlist = res 
    
   } , error => console.log(error));
}; 

getallorderitem(): void {
  this.prodServices.getorderitem().subscribe((res : any )=>{
    this.item = res ; 
    
  } , error => console.log(error))
}
getalladress(): void{
  this.prodServices.getalladresse().subscribe((res)=>{
    this.adresslist=res
    
  } , error => console.log(error))
}
getallproduct(): void {
  this.prodServices.getallproduct().subscribe((res)=>{
this.productlist=res
console.log(res)
  } , error => console.log(error))
}
 getforprovider(user : any){
this.prodServices.getallproduct().subscribe((res)=>{
  let product =[]=res.filter((item: { providerId: any; }) => item.providerId == user.id )
  console.log(product)
  let productIdList : any =[]
 product.forEach((element: { id: any; }) => {

  productIdList.push(element.id)
   
 });
 
 console.log(productIdList)
  
  this.prodServices.getorderitem().subscribe((item)=>{
    let itemlist=item.filter((i: { prodid: any; }) => productIdList.includes(i.prodid))
    
    let orderId : any = []
    itemlist.forEach((element: { order: any; }) => {

      orderId.push(element.order)
       
     });
    this.prodServices.getallorder().subscribe((ord)=>{
     let order =  ord.filter((item: { id: any; }) => orderId.includes(item.id))
      this.orderForProv = order
      console.log(order)
    } , error => console.log(error))

  }, error => console.log(error))

}, error => console.log(error))
    

  
  
}
cancelOrder(id : any):void {
  this.prodServices.cancelorder(id ).subscribe((res : any)=>{
    this.toastr.success(res.message , 'success')
  } , error=>{console.log(error)
  this.toastr.error(error)})
}
}


   


