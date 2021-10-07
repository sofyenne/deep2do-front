import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-newly-added',
  templateUrl: './newly-added.component.html',
  styleUrls: ['./newly-added.component.css']
})
export class NewlyAddedComponent implements OnInit {
  looding=false 
  newlyaddedlist :any = []
  constructor(private productservice : ProductsService) { }

  ngOnInit(): void {
    this.productservice.getnewlyadd().subscribe((res)=>{
      this.newlyaddedlist = res
    } , error => console.log(error))
  }

}
