import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
user : any
id : any
 order : any 
 orderItem : any 
 adresse : any  
   
  
  constructor(private productservice : ProductsService , private router : Router , private route : ActivatedRoute ,private cartService: CartserviceService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentuser') || '{}');
    this.id=this.route.snapshot.params.id
    this.getorderAndItem()
  }

getorderAndItem(){

  this.productservice.getOrderById(this.id).subscribe((res)=>{
  this.order = res
  console.log(res)
this.productservice.getadresByOrder(res.delivery).subscribe((res)=>{
this.adresse=res
console.log(res)
})



  this.productservice.getorderItemById(res.id).subscribe((res)=>{
    this.orderItem = res
    console.log(res)
  } , error => console.log(error))}
  , error => console.log(error))
}

print() {
  const printContent = document.getElementById("Invoice")!;
const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0' )!;
WindowPrt.document.write(printContent.innerHTML);
WindowPrt.document.close();
WindowPrt.focus();
WindowPrt.print();
WindowPrt.close();
}
}
