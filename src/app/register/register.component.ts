import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


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
    role: ['user']
    });
  }

  submit():void{
    if (this.registerForm.valid) {
      let user = this.registerForm.value;
      console.log(user)
      this.http.post('http://localhost:8000/auth/register' , user).subscribe((res) =>{
           if(res){
             this.toastr.success('register successfully');
             this.router.navigate(['login'])
             console.log(res);
            
           }
          
      } ,
      error => this.toastr.error(error))
    }
  }
}

