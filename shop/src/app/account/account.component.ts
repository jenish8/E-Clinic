import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { registeruser } from '../service/register.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AbstractControl, FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username:string='';
  firstname:string='';
  lastname:string='';
  emailid:string='';
  address:string='';
  cno:string='';
  data:any='';
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
      //password: ['',[Validators.required,Validators.minLength(8)]],
     });
    
     this.importUser = this.formBuilder.group({
         file:['',[Validators.required]]
     });
    
    this.username = localStorage.getItem('uname');
    this.listService.getSiteById(this.username).subscribe(res=>{
      
      this.data = res;
      console.log(this.data);
      this.firstname=this.data.data.fname;
      this.lastname=this.data.data.lname;
      this.emailid=this.data.data.email_id;
      this.address=this.data.data.address;
      this.cno=this.data.data.contact_no;
     },err=>{
     console.log(err);
     
     });
  }

  get f() { return this.UserAddEdit.controls; }
  
  onSubmit(form: NgForm) {
   
      const fname = form.value.fname;
      const lname = form.value.lname;
      const email = form.value.email;
      const address = form.value.address;
      const contact_no = form.value.contact_no;
  
      var body = {
        "fname":fname,
        "lname":lname,
        "email_id":email,
        "uname":this.username,
        "address":address,
        "contact_no":contact_no,
      }
      console.log(body);
      this.listService.UpdateSite(body).subscribe(res=>{
        console.log('**');
        
        console.log(res);
        console.log('check');
        this.toastr.success("Your account details is successfully saved");
        this.router.navigate(['/shopeing']);
        
       },err=>{
       console.log(err);
       
       });
      
      form.reset();
      
    
   }

}
