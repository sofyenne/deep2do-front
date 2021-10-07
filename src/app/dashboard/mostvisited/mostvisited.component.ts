import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-mostvisited',
  templateUrl: './mostvisited.component.html',
  styleUrls: ['./mostvisited.component.css']
})
export class MostvisitedComponent implements OnInit {
  looding = false
  listproduct : any =[]
  count : any

  constructor(private router : Router , private searchService : SearchService) { }

  ngOnInit(): void {
    this.getrod();
  }


  details(product:any ): void {
    console.log(product)
    let lien = product.lien ; 
    this.searchService.details(product)
  
    window.location.href =`${lien}`;
  };
  
  getrod() : void {
    this.looding = true
    this.searchService.getmostvisited().subscribe((data : any)=>{
      this.listproduct = data
      this.count = this.listproduct.length
      this.looding = false
    } , error => console.log(error))

  }

}
