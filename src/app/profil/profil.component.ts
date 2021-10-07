import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
user : any 

  constructor(private auth : AuthenticationService) { }

  ngOnInit(): void {

  this.auth.getcurrentuser().subscribe((res:any)=>{
  this.user = res
 
})

  }

}
