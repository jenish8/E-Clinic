import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { LoginService } from '../../../service/authentication.service';
//add Toast Module
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { CookieService } from 'ngx-cookie-service'; 

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

   //for toast show
   position = 'top-right';
   title: string;
   msg: string;
   showClose = true;
   timeout = 5000;
   theme = 'bootstrap';
   type = 'default';
   closeOther = false;
   role:any;

  loginfrm: FormGroup;
  isSubmitted = false;
  r:any=[];
  constructor(
              private router:Router,
              private formBuilder: FormBuilder,
              private loginlist:LoginService,
              private cookieService: CookieService,
              private toastyService: ToastyService) { }

  ngOnInit() {
    // document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    this.isSubmitted = false;
    var mobile=this.cookieService.get('mobile');
    var password=this.cookieService.get('password');
    var rememberMe = this.cookieService.get('remember');

    this.loginfrm = this.formBuilder.group({
      mobileNo: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      remember:'',
    });

    if(mobile != '' || password != ''){
      this.loginfrm.reset({
        mobileNo:mobile,
        password:password,
        remember:rememberMe,
      });
    }
  }

  addToast(msgg:any,type:any) {
    // this.position = this.position;
    const toastOptions: ToastOptions = {
      title: "New Project",
      msg: msgg,
      showClose: this.showClose,
      timeout: this.timeout,
      theme: this.theme,
      onAdd: (toast: ToastData) => {
        // console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: (toast: ToastData) => {
        // console.log('Toast ' + toast.id + ' has been added removed!');
      }
    }
    switch (type) {
      case 'success': this.toastyService.success(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
    }
    // this.toastyService.success(toastOptions);
  }

  get f() { return this.loginfrm.controls; }

  onSubmit(){
    this.isSubmitted = true;
    if (this.loginfrm.invalid) {
      return;
    }else{ 
      console.log("Getting Loginfrm value :-", this.loginfrm.value);
            var body={
              "uname":this.loginfrm.value.mobileNo,
              "password":this.loginfrm.value.password
               }
              this.loginlist.login(body).subscribe(res=>{
                console.log("chk login");
                // console.log(res['user']['utype']);
              this.r= res["user"];
              console.log(this.r["utype"]);
              if(this.r["utype"]=="medicalAdmin")
              {
                console.log("yes");
                if(!this.r.error){
                  if(this.loginfrm.value.remember == true || this.loginfrm.value.remember == "true"){
                    this.cookieService.set('mobile', this.loginfrm.value.mobileNo , 30);  
                    this.cookieService.set('password', this.loginfrm.value.password , 30); 
                    this.cookieService.set('remember','true' , 30);
                  }
                  else{
                    this.cookieService.set('mobile', '' , 30);  
                    this.cookieService.set('password', '' ,30); 
                    this.cookieService.set('remember','',30);
                  }
                      this.addToast("Login Successfully",'success');
                      setTimeout(() => {
                        localStorage.setItem('user_id', body.uname);
                        localStorage.setItem('user_name', body.uname);
              
                        this.router.navigate(['/medicine']);
                        // this.loginfrm.reset();
                          }, 2000);
            }
           
          }
          else
          {
            console.log("no");
            this.addToast("Your user type doesn't match",'error');
          }
       },error=>{
               this.addToast("Invalid username and password",'error');
            });     
    }
  }

}
