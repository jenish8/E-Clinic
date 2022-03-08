import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { registeruser } from '../service/register.service';
import { ResolveEnd, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-otpcheck',
  templateUrl: './otpcheck.component.html',
  styleUrls: ['./otpcheck.component.css']
})
export class OtpcheckComponent implements OnInit {
  username:string='';
  data:any='';
  opass:string='';
  check:any='';
  otp:any = '';
  i:number = 61;
  timeroutshow: number ;
  timeoutdelete: Subscription;
  bt1 = true;
  bt2 = true;
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
     this.username = localStorage.getItem('uname');
      this.otp = localStorage.getItem('otp')
      console.log(`otp is ${this.otp}`);
      const time = interval(1000);
      this.timeoutdelete = time.subscribe(t => {
        console.log(t);
        this.i--;
        this.timeroutshow = this.i
        if(t === 60){
          this.bt1 = false;
          this.timeoutdelete.unsubscribe();
          this.i=61;
        }
        
      })
      
    // this.listService.getSiteById(this.username).subscribe(res=>{
      
    //   this.data = res;
    //  },err=>{
    //  console.log(err);
     
    //  });
    this.isSubmitted = false;
    this.UserAddEdit = this.formBuilder.group({
      otp: ['',[Validators.required]],
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
      let otp = form.value.otp;
    
      if (this.otp === otp){
        this.toastr.success("Your otp is valid");
       this.router.navigate(['/newpass'])
        
      }
      else{
        this.toastr.warning("Invalid otp");
        //console.log("not match");
        
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

  resend()
  {
    var body = {
      "username": this.username
    }
    this.listService.checkUName(body).subscribe(res => {
      console.log(res["user"]);
      localStorage.setItem('otp', res["otp"]);
      this.bt1 = true;
      
      this.ngOnInit();
    })
  }

}
