import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { registeruser } from '../service/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  data : any = '';
  username : string ='';
  firstname : string ='';
  emailid : string ='';
  lastname : string ='';
  cno : string ='';
  address : string ='';
  constructor(
    private listService:registeruser,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('uname');
    this.listService.getSiteById(this.username).subscribe(res=>{
      
      
      this.data = res;
     // console.log(this.data.data.fname);
      this.firstname = this.data.data.fname;
      this.lastname = this.data.data.lname;
      this.emailid = this.data.data.email_id;
      this.address = this.data.data.address;
      this.cno = this.data.data.contact_no;
      
     },err=>{
     console.log(err);
     
     });
  }

  
  onSubmit(form: NgForm) {
    const fname = form.value.fname;
    const lname = form.value.lname;
    const email = form.value.email;
    const username = form.value.uname;
    const password = form.value.password;
    const address = form.value.address;
    const contact_no = form.value.contact_no;

    var body = {
      "fname":fname,
      "lname":lname,
      "email_id":email,
      "uname":username,
      "password": password,
      "address":address,
      "contact_no":contact_no,
    }
    this.listService.UpdateSite(body).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/shopeing']);
      
     },err=>{
     console.log(err);
     
     });
    
    
    form.reset();
  }

}
