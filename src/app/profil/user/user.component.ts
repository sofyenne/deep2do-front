import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from "ngx-toastr";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit { 
  source!: LocalDataSource; 
looding = false
userlist : any =[]
 settings = {
   mode: 'inline',
   columns: {
     name: { title: 'name', filter: true },
     email: { title: 'email', filter: true },
     date_joined: { title: 'date_joined', filter: false },
     role: { title: 'role', filter: false },
    
   },
   delete: {
    deleteButtonContent: '<i class="bi bi-trash">delete</i>',
    confirmDelete: true},
    edit: {
      editButtonContent: '<i class="bi bi-pen">Edit</i>',
      confirmSave: true
    },
   
  
   noDataMessage: 'No data found',
   hideSubHeader: true,
   pager: { display: true, perPage: 8 }
 }
  constructor(private userService : AuthenticationService ,  private toastr : ToastrService ) {
    
  }

  ngOnInit(): void {
    this.getalluser()
  }

getalluser()  {
 this.looding=true
 this.userService.getalluser().subscribe((res)=>{
   
  this.source = new LocalDataSource(res)

  this.looding = false 
   console.log(res)
 } , error => console.log(error)) };




 onSearch(query = '') {
  if (query == '') {
    this.source.setFilter([])
  } else {
    this.source.setFilter([
      { field: 'name', search: query },
      { field: 'email', search: query },

    ], false);
  }
}


deleteCorps(event : any) {
  if (window.confirm('confirm delete user?')){
    console.log(event.data.id);
    this.userService.deleteuser(event.data.id).subscribe(
      success => {
        this.toastr.success( "succès");
        event.confirm.resolve();
      },
      error => {
        this.toastr.error("user not deledted")
        console.log(`error on delete of corps ${event.data.id}, ${error}`)
    
      });
  } else event.confirm.reject();
}
 update(event :any ){
   console.log(event.newData)
   if(window.confirm('confirm update user')){
     this.userService.updateuser(event.data.id , event.newData).subscribe(
      success => {
        this.toastr.success( "succès");
        event.confirm.resolve();
 },
 error => {
   this.toastr.error("user not updated")
   console.log(`error on update of user ${event.data.id}, ${error}`)

 });
} else event.confirm.reject();
 

}
}
