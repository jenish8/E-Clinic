import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { registeruser } from '../service/register.service';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.css']
})
export class NewpassComponent implements OnInit {

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
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
     this.username = localStorage.getItem('fu');
     
     this.isSubmitted = false;
     this.UserAddEdit = this.formBuilder.group({
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
      let pass1 = form.value.newpass;
      let pass2 = form.value.confirmpass;
  
      if(pass1 === pass2){
        var body = {
          "uname": this.username,
          "password": pass1
        }
  
        this.listService.forgotPasswordChange(body).subscribe(res => {
          console.log(res);
          this.toastr.success("Your password is successfully changed");
          this.router.navigate(['/'])
          
        })
        
      }
      else{
        this.toastr.warning("Both the password Doesn't match");
        //console.log('not match');
        
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
