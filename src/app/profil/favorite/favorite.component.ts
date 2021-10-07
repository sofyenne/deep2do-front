import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {


   prod : any = []
   user : any 


  constructor(private product : ProductsService) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('current') || '{}')
    
  }

  getAll() : void {
    this.product.getallproduct().subscribe((res )=>{
      this.prod = res
  })

  }}
