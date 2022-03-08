import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { authservice } from '../service/auth.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserAddEdit: FormGroup;
  importUser:FormGroup;
  isSubmitted = false;

  constructor(
    private listService:authservice,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.isSubmitted = false;
    this.UserAddEdit = this.formBuilder.group({
      uname: ['',[Validators.required]],
      password: ['',[Validators.required]],
     });
    
     this.importUser = this.formBuilder.group({
         file:['',[Validators.required]]
     });
  }

  get f() { return this.UserAddEdit.controls; }

  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    if (this.UserAddEdit.invalid) {
      return;
     }else{
      var body = {
       "uname":this.UserAddEdit.value.uname,
       "password":this.UserAddEdit.value.password,
      }
   console.log(body);
   
      this.listService.logUser(body).subscribe(res=>{
        // console.log("check");
        // console.log(res["user"]["utype"]);
        // console.log(res["user"]["id"]);
        localStorage.setItem('token', res["user"]["id"]);
        localStorage.setItem('uname', res["user"]["uname"]);
        this.toastr.success("You have Successfully logged in");
         this.router.navigate(['/shopeing']);
        
       },err=>{
        this.toastr.warning("Please enter valid username or password");
       //console.log(err);
       
       });
      
      
      form.reset();
    }
  }

}
