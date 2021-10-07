
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { SearchService } from 'src/app/services/search.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchValue=''
searchv : any ={
  "search" : ''
}
p? : Product
looding = false ; 

  listproduct :any  = []  ;
  listlastvisited :any  = []  ;
   
  

  constructor( private serachsv:SearchService,private router : Router  ,private route : ActivatedRoute ,private http: HttpClient) { }

  ngOnInit(): void {
      
    this.getlastvisited()
     
      


  }

getprod(): void {
  this.looding =true;
  this.searchv['search'] = this.searchValue ;
  this.serachsv.searchproduct(this.searchv).subscribe((data:any)=>{
  this.listproduct=data ;
  this.looding=false ; 
  
  this.router.navigateByUrl('search', {skipLocationChange: true}).then(() => this.router.navigate(['search']));
    
  } , error => {
    console.log(error);
   
  })
}

detail(product:any ): void {
  
  let lien = product.lien ; 
  let pp : any = {
    name : product.name ,
    image : product.image,
    price : product.price ,
    lien : product.lien,
    officialsite : product.officialsite
   
  }
  console.log(pp)
  this.serachsv.details(pp).subscribe((res)=>{
    console.log(res)
    window.location.href = `${lien}`;
  } , error => console.log(error))

  
}

getlastvisited(): void {
  this.serachsv.getlastvisited().subscribe((res : any) => {
    this.listlastvisited = res ;


  } ,error => console.log(error)
  )
}

 

}
