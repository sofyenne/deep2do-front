import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup ; 
  submitted = false;
  redirectURL!: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private toastr : ToastrService , private authService : AuthenticationService) { }

  ngOnInit(): void {
    this.redirectURL = this.route.snapshot.queryParams['redirectURL'];
  
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
  });
  }


  async login()  {
    let user = this.loginForm.value
    this.authService.login(user).subscribe(async (res) => {

      if (res.jwt) {
        this.authService.getcurrentuser().subscribe((res) => {
          
          localStorage.setItem('jwt' , res.jwt)

          localStorage.setItem('currentuser', JSON.stringify(res));
         
          if (this.redirectURL) {        
            this.router.navigate([this.redirectURL])
                //.then(()=>
                 // window.location.reload())
                }
                
          else {
        
            this.router.navigate(['']).then(()=>
            window.location.reload())
        }
       
        }, error => console.log(error));

        
        this.toastr.success('Authentication successfully');
      }



    },
      error => this.toastr.error('Authentication failed'))
  }


  register(){
    this.router.navigate(['/register'])
  }
 
  }




