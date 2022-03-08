import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { registeruser } from '../service/register.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { log } from 'console';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
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
       oldpass: ['',[Validators.required,Validators.minLength(8)]],
       newpass: ['',[Validators.required,Validators.minLength(8)]],
       confirmpass: ['',[Validators.required,Validators.minLength(8)]],
      });
     
      this.importUser = this.formBuilder.group({
          file:['',[Validators.required]]
      });
  }

  get f() { return this.UserAddEdit.controls; }
  
  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    const username=form.value.uname;
    if (this.UserAddEdit.invalid) {
      return;
     }else{
      let oldpass = form.value.oldpass;
      let newpass = form.value.newpass;
      let confirmpass=form.value.confirmpass;
      if(oldpass!=newpass)
      {
        if(newpass==confirmpass)
        {
          this.listService.getPassword(this.username).subscribe(res=>{
       
        
            this.data=res;
            this.opass=this.data.data.password;
            console.log('hase password');
            
            console.log(this.opass);
            var body={
              "oldp":this.opass,
              "newp":oldpass,
            }
            console.log(body);
            this.listService.checkPassword(body).subscribe(res=>{        
              this.check=res;
              console.log(this.check);
              if(this.check == true)
              {
                console.log("matches");
                var body = {
                  "uname": this.username,
                  "password": newpass
                }
          
                this.listService.forgotPasswordChange(body).subscribe(res => {
                  this.toastr.success("Your password is successfully changed");
                  console.log(res);
                  this.router.navigate(['/account'])
                  
                })
              }
              else
              {
                this.toastr.warning("Please check your password");
                form.reset();
                //console.log("not matches");
              }
             },err=>{
             console.log(err);
             
             });
        });
   
        }
        else{
          this.toastr.warning("New password and confirm password are different");
          form.reset();
        }
          
    }else{
      this.toastr.warning("Same as old password");
      form.reset();
    }
    
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
