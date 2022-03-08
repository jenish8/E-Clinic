import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AbstractControl, FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { registeruser } from '../service/register.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
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
    this.isSubmitted = false;
    this.UserAddEdit = this.formBuilder.group({
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      address: ['',[Validators.required]],
      contact_no: ['',[Validators.required]],
      uname: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]],
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
      this.listService.getSiteById(username).subscribe(res =>{
        console.log(res['data']);
        if(res['data']==null)
        {
                  var body = {
                    "fname":this.UserAddEdit.value.fname,
                    "lname":this.UserAddEdit.value.lname,
                    "address":this.UserAddEdit.value.address,
                    "contact_no":this.UserAddEdit.value.contact_no,
                    "email_id":this.UserAddEdit.value.email,
                    "uname":this.UserAddEdit.value.uname,
                    "password":this.UserAddEdit.value.password,
                  }
                  this.listService.createDep(body).subscribe(res=>{
                    console.log(res);
                    this.toastr.success("Your Register form is submitted");
                    this.router.navigate(['/']);
                    
                  },err=>{
                  console.log(err);
                  
                  });
                  
                  
                  form.reset();
        }
        else
        {
          this.toastr.warning("Username already exist");
        }
      })
  
     }

    
   }

}
