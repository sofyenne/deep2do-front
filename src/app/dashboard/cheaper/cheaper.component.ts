import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-cheaper',
  templateUrl: './cheaper.component.html',
  styleUrls: ['./cheaper.component.css']
})
export class CheaperComponent implements OnInit {
  looding = false
  listproduct : any =[]
  count : any
  constructor(private router : Router , private searchService : SearchService) { }

  ngOnInit(): void {
    this.getproduct();
  }


  getproduct():void {
    this.looding =true 
    this.searchService.getproduct().subscribe((data:any)=>{
      this.listproduct=data;
      this.count = this.listproduct.length
      this.looding = false ; 

    } , error => console.log(error))
  };

  details(product:any ): void {
    console.log(product)
    let lien = product.lien ; 
    this.searchService.details(product)
  
    window.location.href =`${lien}`;
  };
}
