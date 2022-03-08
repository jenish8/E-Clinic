import { Component, OnInit ,NgZone,ViewChild,ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { userservice } from 'src/app/service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
//  public popoverTitle:string="User Deactive Confirmation";
//  public popoverMessage:string="Are you Sure went to Deactive?";
//  public popoverTitle1:string="User Active Confirmation";
//  public popoverMessage1:string="Are you Sure went to Active?";
confirmClicked = false;
cancelClicked = false;


display='none';
import ="none";
public gridData: any = [];
resp:any;
UserAddEdit: FormGroup;
importUser:FormGroup;
UserStatus:any;
isSubmitted = false;
uniquId:any;

rep:any=[];
message:any;

loading:any;

ress:any;
data1:any;

@ViewChild("search",{static:false}) public search:ElementRef;

//maps module
public places:Array<any>;
public lat: number= 21.1591857;
public lng: number= 72.7522563;
// public searchControl: FormControl;
public zoom: number= 8;
locvalue:any="";
ind:any;
industry:any;
uid:any;

ter:any;
territory:any;
dataString:any;

constructor(
private listService:userservice,
private formBuilder: FormBuilder,
private zone:NgZone,
private toastyService: ToastyService)
{ }

ngOnInit() {
this.isSubmitted = false;
this.loading=true;
this.uid=localStorage.getItem("user_id");

 this.listService.getAllUser().subscribe(res=>{
   console.log(res)
   this.resp = res;
   this.loading=false;
   console.log("Getting Data :-", this.resp);
   this.gridData = this.resp;
 });

 this.UserAddEdit = this.formBuilder.group({
  fname: ['',[Validators.required]],
  mname: ['',[Validators.required]],
  lname: ['',[Validators.required]],
  email_id: ['',[Validators.required]],
  address: ['',[Validators.required]],
  contact_no: ['',[Validators.required]],
  uname: ['',[Validators.required]],
  password: ['',[Validators.required]],
  utype: ['',[Validators.required]]
 });

 this.importUser = this.formBuilder.group({
     file:['',[Validators.required]]
 });
 
}




deleteUser(id:any){
// var bo={
//   "site_id":id,
// }
this.listService.DeleteSite(id).subscribe(res=>{
 this.rep = res;
 // this.message = this.rep.message;
 this.addToast('User Deleted Successfully!!','success');
 this.ngOnInit();
});
}


saveUser(){
this.display= 'block';
}



editUser(id:any){
  this.uniquId=id;
  this.listService.getSiteById(this.uniquId).subscribe(res=>{
    this.ress= res;
    this.data1=this.ress.data;
    console.log("Getting Site Details :-", this.data1);
    this.display = 'block';
    this.UserAddEdit.reset({
      fname: this.data1.fname,
      mname: this.data1.mname,
      lname: this.data1.lname,
      email_id: this.data1.email_id,
      address: this.data1.address,
      contact_no: this.data1.contact_no,
      uname: this.data1.uname,
      password: this.data1.password,
      utype: this.data1.utype,
    });
  });

}

tempUser(id:any){
 // this.uniquId=id;
  //this.listService.getSiteById(this.uniquId).subscribe(res=>{
    //this.ress= res;
   // this.data1=this.ress.data;
    //console.log("Getting Site Details :-", this.data1);
    //this.display = 'block';
    this.listService.tempDelUser(id).subscribe(res=>{
      //this.rep = res;
      //console.log("Getting Update Data :-", res);
      // this.message = this.rep.message;
        this.addToast("User is temporarily deleted successfully!!",'success');
       // this.onCloseHandled();
        this.ngOnInit();
        //this.uniquId='';
    },err=>{
      this.addToast("User is not temporarily deleted successfully!!",'error');
    });
 // });

}

regUser(id:any){
  // this.uniquId=id;
   //this.listService.getSiteById(this.uniquId).subscribe(res=>{
     //this.ress= res;
    // this.data1=this.ress.data;
     //console.log("Getting Site Details :-", this.data1);
     //this.display = 'block';
     this.listService.RegainUser(id).subscribe(res=>{
       //this.rep = res;
       //console.log("Getting Update Data :-", res);
       // this.message = this.rep.message;
         this.addToast("User regained successfully!!",'success');
        // this.onCloseHandled();
         this.ngOnInit();
         //this.uniquId='';
     },err=>{
       this.addToast("User not regained successfully!!",'error');
     });
  // });
 
 }


addToast(msgg:any,type:any) {
// this.position = this.position;
const toastOptions: ToastOptions = {
 title: "Message",
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

get f() { return this.UserAddEdit.controls; }


onClose(){
this.import = 'none';
this.ngOnInit();
// this.importUser.reset();
}

// onImport(){
//   this.isSubmitted = true;
//   if (this.importUser.invalid) {
//     return;
//   }else{
//    for(var i=0;i<this.dataString.length;i++){
//     var body=this.dataString[i];
//     this.listService.createUser(this.dataString[i]).subscribe(res=>{
//       this.rep.push(res);
//      });
//   }
//   setTimeout(() => { if(this.rep != [] ){
//     this.addToast('User Create Successfully','success');
//     this.ngOnInit();
//     this.import='none';
//     }else{
//     this.addToast('User Not Added','error');
//     }
//   },3000);
// }
// }

async onSubmit() {
this.isSubmitted = true;
console.log("Getting FormData :-",this.UserAddEdit.value)
if (this.UserAddEdit.invalid) {
 return;
}else{
     if(!this.uniquId){
       var body={
           "fname":this.UserAddEdit.value.fname,
           "mname":this.UserAddEdit.value.mname,
           "lname":this.UserAddEdit.value.lname,
           "delivertyTerms":this.UserAddEdit.value.delivertyTerms,
           "address":this.UserAddEdit.value.address,
           "contact_no":this.UserAddEdit.value.contact_no,
           "email_id":this.UserAddEdit.value.email_id,
           "uname":this.UserAddEdit.value.uname,
           "password":this.UserAddEdit.value.password,
           "utype":this.UserAddEdit.value.utype,
          }
       console.log("Getting Create User :-", body);
       this.listService.createUser(body).subscribe(res=>{
        this.rep = res;
           this.addToast('New User created Successfully','success');
             this.onCloseHandled();
             this.ngOnInit();
       },err=>{
         this.addToast("Error Please Try Again!!",'error');
         this.onCloseHandled();
         this.ngOnInit();
       });
     }
     else{
       var bo={
         "id": this.uniquId,
         "fname":this.UserAddEdit.value.fname,
         "mname":this.UserAddEdit.value.mname,
         "lname":this.UserAddEdit.value.lname,
         "delivertyTerms":this.UserAddEdit.value.delivertyTerms,
         "address":this.UserAddEdit.value.address,
         "contact_no":this.UserAddEdit.value.contact_no,
         "email_id":this.UserAddEdit.value.email_id,
         "uname":this.UserAddEdit.value.uname,
         "password":this.UserAddEdit.value.password,
         "utype":this.UserAddEdit.value.utype,
        }
       console.log("Getting Updated Body:-", bo); 
       this.listService.UpdateSite(bo).subscribe(res=>{
         this.rep = res;
         console.log("Getting Update Data :-", res);
         // this.message = this.rep.message;
           this.addToast("User Updated Successfully!!",'success');
           this.onCloseHandled();
           this.ngOnInit();
           this.uniquId='';
       },err=>{
         this.addToast("User not Updated",'error');
       });
     }
     
   
}
}

onCloseHandled(){
this.display ='none';
this.ngOnInit();
this.uniquId='';
// this.UserAddEdit.reset();
}


}
