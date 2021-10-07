import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { ToastrService } from 'ngx-toastr';
import { Emitters } from 'src/app/emitters/emitters';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mee',
  templateUrl: './mee.component.html',
  styleUrls: ['./mee.component.css']
})
export class MeeComponent implements OnInit {
user: any
deliverylist : any =[]
source!: LocalDataSource; 
looding = false
formulaire!: FormGroup;
 settings = {
   mode: 'inline',
   columns: {
    id: { title: 'Id', filter: true },
     country: { title: 'country', filter: true },
     city: { title: 'city', filter: true },
     place: { title: 'place', filter: true }

   },
   delete: {
    deleteButtonContent: '<i class="bi bi-trash">delete</i>',
    confirmDelete: true},
    
 
    actions:{
      edit:false ,
      position: 'right',
    },
  
    hideSubHeader: true,
   
  
 }
  constructor(private http: HttpClient , private toastr : ToastrService , private form : FormBuilder) { }

  ngOnInit(): void {

   this.user = JSON.parse(localStorage.getItem('currentuser') || '{}');
    
    this.formulaire = this.form.group({

      country : ['', Validators.required],
      city : ['', Validators.required],
      place : ['', Validators.required],
      user : ['',Validators.required]
      
  });


this.get()



  }


  add() : void {
    this.formulaire.controls.user.setValue(this.user.id)
    let adress = this.formulaire.value
    this.http.post(`${environment.apiUrl}/shop/delivery/`,adress).subscribe(()=>{
      this.toastr.success('success')
      window.location.reload()
    } , error =>{
      this.toastr.error("error at add delivery adress" , error)
      console.log(error)
    })
  }




  onSearch(query = '') {
    if (query == '') {
      this.source.setFilter([])
    } else {
      this.source.setFilter([
        { field: 'city', search: query },
        { field: 'contry', search: query },
        { field: 'place', search: query },
  
      ], false);
    }
  }
get(){
  let user =  JSON.parse(localStorage.getItem('currentuser') || '{}');
  this.http.get(`${environment.apiUrl}/shop/delivery/${user.id}`).subscribe((res : any )=>{
    this.source = new LocalDataSource(res)
 } , error => console.log(error))
}
delete(event : any){
  if(window.confirm('delete adress')){
  this.http.delete(`${environment.apiUrl}/shop/delivery/${event.data.id}`).subscribe(()=>{
    this.toastr.success('success')
    event.confirm.resolve();
   
  })
}else event.confirm.reject();
}
}
