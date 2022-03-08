import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { registeruser } from '../service/register.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  username:string='';
  data:any='';
  opass:string='';
  check:any='';
  UserAddEdit: FormGroup;
  importUser:FormGroup;
  isSubmitted = false;
  constructor(
    private listService:registeruser,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
     this.username = localStorage.getItem('uname');
     this.isSubmitted = false;
     this.UserAddEdit = this.formBuilder.group({
       username: ['',[Validators.required]],
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
      let uname = form.value.username;
      console.log(uname);
      var body = {
        "username": uname
      }
      this.listService.checkUName(body).subscribe(res => {
        console.log(res["user"]);
        
        localStorage.setItem('otp', res["otp"]);
        localStorage.setItem('fu', res["user"]["uname"]);
        this.toastr.success("Your username is valid");
        this.router.navigate(['/otpcheck'])
      },err=>{
          this.toastr.warning("Your username is not valid");
         });
      // var body = {
      //   "password":oldpass,
      //   "uname":this.username,
      // }
      // this.listService.UpdateSite(body).subscribe(res=>{
      //   console.log('**');
        
      //   console.log(res);
      //   this.router.navigate(['/shopeing']);
        
      //  },err=>{
      //  console.log(err);
       
      //  });
      
      
      form.reset();
     }
    
  }

}
