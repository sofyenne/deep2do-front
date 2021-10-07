import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
productlist : any =[]
term : any
currentuser : any 
  constructor(private productService : ProductsService , private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getproduct()
    this.currentuser = JSON.parse(localStorage.getItem('currentuser')|| '{}')
  }

  getproduct():void{
    this.productService.getallproduct().subscribe((res)=>{
this.productlist = res
    } , error => console.log(error))
  }
  
  delete(id :number):void{
    if (window.confirm("delete product")){
      this.productService.deleteproduct(id).subscribe(()=>{
        this.toastr.success("product deleted")
        window.location.reload()

      } , error=> {
        this.toastr.error("error at delete product")
        console.log(error)
      });
      
    }
  }
}
