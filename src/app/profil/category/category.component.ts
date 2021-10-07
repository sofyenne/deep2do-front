import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  source!: LocalDataSource; 
  looding = false
  formulaire!: FormGroup;
   settings = {
     mode: 'inline',
     columns: {
      id: { title: 'Id', filter: false },
       name: { title: 'Name', filter: true }

     },
     delete: {
      deleteButtonContent: '<i class="bi bi-trash">delete</i>',
      confirmDelete: true},
      edit: {
        editButtonContent: '<i class="bi bi-pen">Edit</i>',
        confirmSave: true
      },
      add: {
        editButtonContent: '<i class="bi bi-pen">Edit</i>',
        confirmCreate: true,
      },
      actions:{
        position: 'right',
      },
    
      hideSubHeader: true,
     
    
   }
  constructor(private productService : ProductsService , private toast : ToastrService,  private form : FormBuilder) { }

  ngOnInit(): void {

    this.formulaire = this.form.group({

      name : ['', Validators.required],
      id : ['', ],
      
  });


    this.getallcategory()
  }


getallcategory(): void {
  this.looding= true
  this.productService.getcategory().subscribe((res :any )=>{
    this.source = new LocalDataSource(res)
    this.looding = false 
  } , error => console.log(error))};



  onSearch(query = '') {
    if (query == '') {
      this.source.setFilter([])
    } else {
      this.source.setFilter([
        { field: 'name', search: query },
        { field: 'id', search: query },
  
      ], false);
    }
  }

  delete( event : any) {
    if (window.confirm('êtes vous sûr de vouloir supprimer cette affectation?')){
      
      this.productService.deletecategory(event.data.id).subscribe(
        success => {
          this.toast.success( "succès");
          event.confirm.resolve();
          window.location.reload()
        },
        error => {
          this.toast.error("category not deledted")
          console.log(`error on delete of category ${event.data.id}, ${error}`)
      
        });
    } else event.confirm.reject();
  }
   update(event : any) : void{
     if(window.confirm('confirm update category')){
       this.productService.updatvategory(event.data.id ,event.newData).subscribe(
        success => {
          this.toast.success( "succes");
          event.confirm.resolve();
          console.log(event.newData)
          window.location.reload()
   },
   error => {
     this.toast.error("category not updated")
     console.log(`error on update of category ${event.data.id}, ${error}`)
  
   });
  } else event.confirm.reject();

   }


   add() : void{
     let category = this.formulaire.value ;
     console.log(category)
    if(window.confirm('confirm add  category')){
      this.productService.createcategoiry(category).subscribe(
      () => {
        
         this.toast.success( "succes");  
         window.location.reload()
        
  },
  error => {
    this.toast.error("category not added")
    console.log(`${error}`)
 
  });
 } 

   }

   resetForm (){
    this.formulaire.reset();
  }


}
