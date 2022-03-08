import { Component, OnInit ,NgZone,ViewChild,ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';

import { userservice } from 'src/app/service/send.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
 //for toast show
position = 'top-center';
title: string;
msg: string;
showClose = true;
timeout = 5000;
theme = 'bootstrap';
type = 'default';
closeOther = false;
rep:any=[];

UserAddEdit: FormGroup;
importUser:FormGroup;
isSubmitted = false;
public places:Array<any>;
public lat: number= 21.1591857;
public lng: number= 72.7522563;

constructor(
private listService:userservice,
private toastr: ToastrService,
private formBuilder: FormBuilder,
)
{ }

ngOnInit(): void {
  
  this.isSubmitted = false;
  this.UserAddEdit = this.formBuilder.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    phone: ['',[Validators.required]],
    subject: ['',[Validators.required]],
    msg: ['',[Validators.required]],
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
      var body={
        "name":form.value.name,
        "email":form.value.email,
        "phno":form.value.phone,
        "subject":form.value.subject,
        "msg":form.value.msg,
       }
       console.log(`send server ${body}`);
       
    this.listService.SendMail(body).subscribe(res=>{
     this.rep = res;
     this.toastr.success("Your message is sent!!")
     form.reset();
     // this.message = this.rep.message;
  
    });
     }
  }

}
