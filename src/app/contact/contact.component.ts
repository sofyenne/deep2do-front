import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formulaire!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    
    private toastr: ToastrService , private http : HttpClient) { }

  ngOnInit(): void {

    this.formulaire = this.formBuilder.group({
       
      email: ['', Validators.required],
      Message: ['', Validators.required]
  });
  }


  contact() : void {
this.http.post(`${environment.apiUrl}/auth/contact` , this.formulaire.value).subscribe((res : any)=>{
   this.toastr.success('success'+res.respense);
   this.formulaire.reset();
   this.router.navigate([''])
} , error => {console.log(error)
this.toastr.error('error'+error)})
    
    
  }
}
