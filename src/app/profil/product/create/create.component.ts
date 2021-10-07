import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 categoryList : any =[]
 form!: FormGroup;
 image! : File
 
  constructor(private router : Router ,  private prodService : ProductsService ,  private formBuilder: FormBuilder , private toast : ToastrService) { }

  ngOnInit(): void {


        
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required],
      description: ['', Validators.required],
      brand: ['', Validators.required]
  });
  

    this.prodService.getcategory().subscribe((res)=>{
      this.categoryList = res ;
      
    } , error => console.log(error));



  }

  saveprod():void{
    let user = JSON.parse(localStorage.getItem('currentuser') || '{}')
    let prod = new FormData();
    prod.append('image' , this.image , this.image.name)
    prod.append('price' , this.form.get('price')?.value)
    prod.append('name' , this.form.get('name')?.value)
    prod.append('brand' , this.form.get('brand')?.value)
    prod.append('description' , this.form.get('description')?.value)
    prod.append('categoryId' , this.form.get('categoryId')?.value)
    prod.append('providerId' , user.id)
    if (window.confirm("Add new product")){
      this.prodService.createproduct(prod).subscribe(()=>{
        this.toast.success("success")
        this.router.navigate(['profile/list'])
      } , error => {
        this.toast.error("error at save product")
        console.log(error)
      })
    }

    
  }
  resetForm (){
    this.form.reset();
  }
onselectFile(event :any){
 this.image=event.target.files[0]
}


}
