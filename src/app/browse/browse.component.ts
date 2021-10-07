import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  selectedCategory = 'any'
  productlist : any = []
  productlistbycat : any = []
searchValue : any
  categories : any=  []
  user : any
  constructor(private productservices : ProductsService ) { }

  ngOnInit(): void {
  
    this.getall();
    this.getallcategory()
  }
  selectCategory(category: string , id : number) {
    this.selectedCategory = category;
    this.productservices.getbycatname(id).subscribe((res)=>{
         this.productlistbycat = res
         console.log(res)
    } , error => console.log(error))
    
  }



  clearCategory() {
    this.selectedCategory = 'any';
    this.productlistbycat = []
    
    
  }
  getall():void{
    this.productservices.getallproduct().subscribe((res)=>{
      this.productlist=res ; 
      console.log(res)
    }, error=>console.log(error))
  }
  getallcategory():void{
    this.productservices.getallcategory().subscribe((res)=>{
      this.categories=res
      console.log(res)
    } , error => console.log(error))
  }




}
