import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-most-selling',
  templateUrl: './most-selling.component.html',
  styleUrls: ['./most-selling.component.css']
})

export class MostSellingComponent implements OnInit {
  @ViewChild('mostCards')
  mostCards!: ElementRef;
  mostsellingList : any = []

  constructor(private prodsevice : ProductsService) { }

  ngOnInit(): void {
    this.prodsevice.getmostselling().subscribe((res)=>{
      this.mostsellingList = res
      console.log(res)
    } , error => console.log(error))
  }
  scrollLeft() {
    this.mostCards.nativeElement.scrollLeft -= 250;
  }

  scrollRight() {
    this.mostCards.nativeElement.scrollLeft += 250;
  }
}
