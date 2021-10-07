import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

 
  registerForm!: FormGroup;
  user : any 


  constructor(private formBuilder: FormBuilder,
    private router: Router, private  authService : AuthenticationService , private toastr : ToastrService ,private http: HttpClient) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      email: ['',
        [Validators.required]
      ],
      password: ['',
        [Validators.required]
      ],
      
      name: ['',
        [Validators.required]
    ],
    role: ['provider'],
    rols: ['',[Validators.required]]
    });
  }

  submit():void{
    if (this.registerForm.valid) {
      this.registerForm.removeControl('rols')
      console.log(this.registerForm.value)
      let user = this.registerForm.value;
      
      this.http.post('http://localhost:8000/auth/register' , user).subscribe((res : any ) =>{
           if(res){
             this.toastr.success('register successfully');
             this.router.navigate(['login'])
             console.log(res);
            
           }
          
      } , error => console.log(error))
    }
  }
}


