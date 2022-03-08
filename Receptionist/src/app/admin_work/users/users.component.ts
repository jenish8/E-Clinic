import { Component, OnInit , ViewChild } from '@angular/core';
import {UserService} from 'src/app/service/adminService/user.service';
import { FormGroup, FormBuilder, Validators ,ValidatorFn, AbstractControl,ValidationErrors,FormControl} from '@angular/forms';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { delay, switchMap, map, tap } from 'rxjs/operators';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
       //for toast show
       position = 'top-center';
       title: string;
       msg: string;
       showClose = true;
       timeout = 5000;
       theme = 'bootstrap';
       type = 'default';
       closeOther = false;
  
       //show delete confirmation message
       public popoverTitle:string="Customer Deactive Confirmation";
       public popoverMessage:string="Are you Sure went to Deactive?";
       public popoverTitle1:string="Customer Active Confirmation";
       public popoverMessage1:string="Are you Sure went to Active?";
      confirmClicked = false;
      cancelClicked = false;

      display='none';
      import ="none";
      public gridData: any = [];
      resp:any;
      userAddEdit: FormGroup;
      CustomerStatus:any;
      isSubmitted = false;
      uniquId:any;
    
      rep:any=[];
      message:any;
    
      loading:any;
    
      ress:any;
      data1:any;
      uid:any;

  constructor(private listService:UserService,
              private formBuilder: FormBuilder,
             private toastyService: ToastyService) { }

  ngOnInit() {
    this.isSubmitted = false;
    this.loading=true;
    this.uid=localStorage.getItem("user_id");

    this.listService.getUser().subscribe(res=>{
      this.resp = res;
      this.loading=false;
      console.log("Getting Data :-", this.resp.msg);
      this.gridData = this.resp.msg;
    });

    this.userAddEdit=this.formBuilder.group({
      username:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      mobilenumber:['',[Validators.required]],
      address:['',[Validators.required]],
    })
    }

    saveUser(){
      this.display= 'block';
    }
    
    onCloseHandled(){
      this.display='none';
      this.ngOnInit();
    }

    addToast(msgg:any,type:any) {
      // this.position = this.position;
      const toastOptions: ToastOptions = {
        title: "Royal India",
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

    deleteUser(id:any){
      var bb={
        "user_id":id
      }
      this.loading=true;
      this.listService.deleteUser(bb).subscribe(res=>{
        this.addToast("UserName Deleted Successfully!!",'success');
        this.ngOnInit();
        this.loading=false;
      })
    }
  
    get f() { return this.userAddEdit.controls; }

    async onSubmit() {
      this.isSubmitted = true;
      console.log("Getting FormData :-",this.userAddEdit.value)
      if (this.userAddEdit.invalid) {
        return;
      }else{
            if(!this.uniquId){
              var body={
                "username":this.userAddEdit.value.username,
                "email":this.userAddEdit.value.email,
                "password":this.userAddEdit.value.password,
                "moblienumber":this.userAddEdit.value.mobilenumber,
                "address":this.userAddEdit.value.address                
                 }
              // console.log("Getting Create Customer :-", body);
              this.listService.createUser(body).subscribe(res=>{
               this.rep = res;
                  this.addToast('New User Create Successfully','success');
                    this.onCloseHandled();
                    // this.ngOnInit();
              },err=>{
                this.addToast("New User Not Added! Please Try Again!!",'error');
                this.onCloseHandled();
                // this.ngOnInit();
              });
            }
            else{
              // var bo={
              //   "site_id": this.uniquId,
              //   "fname":this.customerAddEdit.value.Fname,
              //   "mname":this.customerAddEdit.value.Mname,
              //   "lname":this.customerAddEdit.value.lname,
              //   "address":this.customerAddEdit.value.address,
              //   "phno":this.customerAddEdit.value.pno,
              //   "adno":this.customerAddEdit.value.adno,
              //   "email":this.customerAddEdit.value.email,
              //   "state":this.customerAddEdit.value.State,
              //   "dist":this.customerAddEdit.value.District,
              //   "srno":this.customerAddEdit.value.Srno,
              //   "insloc":this.customerAddEdit.value.inl,
              //   "vfdm":this.customerAddEdit.value.vfd,
              //   "vfsr":this.customerAddEdit.value.vfdsrno,
              //   "mtype":this.customerAddEdit.value.mtype,
              //   "mc":this.customerAddEdit.value.moc,
              //   "msl":this.customerAddEdit.value.mosl,
              //   "psl":this.customerAddEdit.value.puno,
              //   "mhp":this.customerAddEdit.value.mhp,
              //   "mhs":this.customerAddEdit.value.mhz,
              //   "ime":this.customerAddEdit.value.imeino,
              //   "rms":this.customerAddEdit.value.rmspno,
              //   "did":this.customerAddEdit.value.device_id,
              //   "conpn":this.customerAddEdit.value.conpn,
              //   "nob":this.customerAddEdit.value.nob,
              //   "gp":this.customerAddEdit.value.gp,
              //   "nov":this.customerAddEdit.value.nov,
              //   "sname":this.customerAddEdit.value.sname,
              //   "pop":this.customerAddEdit.value.pop,
              //   "sunq":this.customerAddEdit.value.sunq,
              //  }
               
              // this.listService.UpdateSite(bo).subscribe(res=>{
              //   this.rep = res;
              //   // this.message = this.rep.message;
              //     this.addToast(this.rep.siteedit,'success');
              //     this.onCloseHandled();
              //     this.ngOnInit();
              //     this.uniquId='';
              // },err=>{
              //   this.addToast("Site Not Updated Successfully!!",'error');
              // });
            }     
          
      }
    }
  
}