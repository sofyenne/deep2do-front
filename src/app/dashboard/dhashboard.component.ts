import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dhashboard',
  templateUrl: './dhashboard.component.html',
  styleUrls: ['./dhashboard.component.css']
})
export class DhashboardComponent implements OnInit {

  currentuser : any  ; 
  message = ""
  searchValue : any ; 

  constructor(private route: ActivatedRoute,
    private router: Router,private toastr : ToastrService , private authService : AuthenticationService  ) { }

  ngOnInit(): void {

  }



  logout(){
    this.authService.logout().subscribe(()=>{

      this.router.navigate(['']);
      this.toastr.success('logout successfully')

    } , error => this.toastr.error('logout failed '))
  }

  getcurrent() : void {
    this.authService.getcurrentuser().subscribe((res : any)=> {
         this.currentuser = res ; 
         this.message = `Hi ${res.name}`

    } , error => this.message = 'You are not logged In ')
  }
  onsearch(searchValue :string) : void  {
     this.router.navigate(['/search' , searchValue])
  }
 
}
