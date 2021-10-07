import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  listlastvisited :any  = []  ;
  count : any  
  

  constructor( private serachsv:SearchService,private router : Router  ,private route : ActivatedRoute ,private http: HttpClient) { }

  ngOnInit(): void {
      
    this.getlastvisited()
     
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
this.count = this.listlastvisited.length

  } ,error => console.log(error)
  )
}}

