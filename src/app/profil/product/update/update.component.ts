import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
public id : any ; 
public product : any={} ;
categoryList : any=[]
newimage! :File
myform :any;
  constructor(private productService : ProductsService , private  toastr : ToastrService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  
    this.id=this.route.snapshot.params.id ; 
    this.productService.getcategory().subscribe((res)=>{
      this.categoryList=res
    })
    this.get()
  }
update(){
  this.myform=document.getElementById('myform')
  let newprod = new FormData(this.myform);
  newprod.delete('image');
  newprod.delete('categoryId');
  newprod.append('categoryId' , this.product.categoryId)
  if(this.newimage!=undefined){
    newprod.append('iamge',this.newimage,this.newimage.name)
  }
  
  this.productService.updateproduct(this.id,newprod)
  .subscribe(()=>{
    this.toastr.success("product updated")
    this.router.navigate(['/profile/list'])
  } , error =>{
    this.toastr.error("error at update product")
    console.log(error)
  })

}
get(): void {
  this.productService.getbyid(this.id).subscribe((res)=>{
    this.product = res
   
  } , error => console.log(error))
}

onselectFile(event :any){
  this.newimage=event.target.files[0]

 }
}
