import { Component, OnInit ,NgZone,ViewChild,ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import {patientservice} from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
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
//  public popoverTitle:string="Patient Deactive Confirmation";
//  public popoverMessage:string="Are you Sure went to Deactive?";
//  public popoverTitle1:string="Patient Active Confirmation";
//  public popoverMessage1:string="Are you Sure went to Active?";
confirmClicked = false;
cancelClicked = false;


display='none';
import ="none";
public gridData: any = [];
resp:any;
PatientAddEdit: FormGroup;
importPatient:FormGroup;
PatientStatus:any;
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
private listService:patientservice,
private formBuilder: FormBuilder,
private zone:NgZone,
private toastyService: ToastyService)
{ }

ngOnInit() {
this.isSubmitted = false;
this.loading=true;
this.uid=localStorage.getItem("Patient_id");

 this.listService.getAllPatient().subscribe(res=>{
   this.resp = res;
   this.loading=false;
   console.log("Getting Data :-", this.resp);
   this.gridData = this.resp;
 });

 this.PatientAddEdit = this.formBuilder.group({
   fname: ['',[Validators.required]],
   lname: ['',[Validators.required]],
   email_id: ['',[Validators.required]],
   address: ['',[Validators.required]],
   contact_no: ['',[Validators.required]],
   gender: ['',[Validators.required]],
   dob: ['',[Validators.required]],
   login_id: ['',[Validators.required]],
   password: ['',[Validators.required]],
   photo: ['',[Validators.required]],
 });

 this.importPatient = this.formBuilder.group({
     file:['',[Validators.required]]
 });
 
}




deletePatient(id:any){
// var bo={
//   "site_id":id,
// }
this.listService.DeleteSite(id).subscribe(res=>{
 this.rep = res;
 // this.message = this.rep.message;
 this.addToast('Patient Deleted Successfully!!','success');
 this.ngOnInit();
});
}


savePatient(){
this.display= 'block';
}

editPatient(id:any){
this.uniquId=id;
this.listService.getSiteById(this.uniquId).subscribe(res=>{
 this.ress= res;
 this.data1=this.ress.data;
 console.log("Getting Site Details :-", this.data1);
 this.display = 'block';
 this.PatientAddEdit.reset({
      fname: this.data1.fname,
      lname: this.data1.lname,
      email_id: this.data1.email_id,
      address: this.data1.address,
      contact_no: this.data1.contact_no,
      gender: this.data1.gender,
      dob: this.data1.dob,
      login_id: this.data1.login_id,
      password: this.data1.password,
      photo: this.data1.photo
 });
});

}

tempPatient(id:any){
  // this.uniquId=id;
   //this.listService.getSiteById(this.uniquId).subscribe(res=>{
     //this.ress= res;
    // this.data1=this.ress.data;
     //console.log("Getting Site Details :-", this.data1);
     //this.display = 'block';
     this.listService.tempDelPatient(id).subscribe(res=>{
       //this.rep = res;
       //console.log("Getting Update Data :-", res);
       // this.message = this.rep.message;
         this.addToast("Patient is temporarily deleted successfully!!",'success');
        // this.onCloseHandled();
         this.ngOnInit();
         //this.uniquId='';
     },err=>{
       this.addToast("Patient is not temporarily deleted successfully!!",'error');
     });
  // });
 
 }

 regPatient(id:any){
  // this.uniquId=id;
   //this.listService.getSiteById(this.uniquId).subscribe(res=>{
     //this.ress= res;
    // this.data1=this.ress.data;
     //console.log("Getting Site Details :-", this.data1);
     //this.display = 'block';
     this.listService.RegainPatient(id).subscribe(res=>{
       //this.rep = res;
       //console.log("Getting Update Data :-", res);
       // this.message = this.rep.message;
         this.addToast("Patient regained successfully!!",'success');
        // this.onCloseHandled();
         this.ngOnInit();
         //this.uniquId='';
     },err=>{
       this.addToast("Patient not regained successfully!!",'error');
     });
  // });
 
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

get f() { return this.PatientAddEdit.controls; }


onClose(){
this.import = 'none';
this.ngOnInit();
// this.importPatient.reset();
}

// onImport(){
//   this.isSubmitted = true;
//   if (this.importPatient.invalid) {
//     return;
//   }else{
//    for(var i=0;i<this.dataString.length;i++){
//     var body=this.dataString[i];
//     this.listService.createPatient(this.dataString[i]).subscribe(res=>{
//       this.rep.push(res);
//      });
//   }
//   setTimeout(() => { if(this.rep != [] ){
//     this.addToast('Patient Create Successfully','success');
//     this.ngOnInit();
//     this.import='none';
//     }else{
//     this.addToast('Patient Not Added','error');
//     }
//   },3000);
// }
// }

async onSubmit() {
this.isSubmitted = true;
console.log("Getting FormData :-",this.PatientAddEdit.value)
if (this.PatientAddEdit.invalid) {
 return;
}else{
     if(!this.uniquId){
       var body={
        "fname":this.PatientAddEdit.value.fname,
        "lname":this.PatientAddEdit.value.lname,
        "email_id":this.PatientAddEdit.value.email_id,
        "address":this.PatientAddEdit.value.address,
        "contact_no":this.PatientAddEdit.value.contact_no,
        "gender":this.PatientAddEdit.value.gender,
        "dob":this.PatientAddEdit.value.dob,
        "login_id":this.PatientAddEdit.value.login_id,
        "password":this.PatientAddEdit.value.password,
        "photo":this.PatientAddEdit.value.photo,
          }
       console.log("Getting Create Patient :-", body);
       this.listService.createPatient(body).subscribe(res=>{
        this.rep = res;
           this.addToast('New Dep & LOV Create Successfully','success');
             this.onCloseHandled();
             this.ngOnInit();
       },err=>{
         this.addToast("New Dep & LOV Not Added! Please Try Again!!",'error');
         this.onCloseHandled();
         this.ngOnInit();
       });
     }
     else{
       var bo={
         "id": this.uniquId,
         "fname":this.PatientAddEdit.value.fname,
         "lname":this.PatientAddEdit.value.lname,
         "email_id":this.PatientAddEdit.value.email_id,
         "address":this.PatientAddEdit.value.address,
         "contact_no":this.PatientAddEdit.value.contact_no,
         "gender":this.PatientAddEdit.value.gender,
         "dob":this.PatientAddEdit.value.dob,
         "login_id":this.PatientAddEdit.value.login_id,
         "password":this.PatientAddEdit.value.password,
         "photo":this.PatientAddEdit.value.photo,
         
        }
       console.log("Getting Updated Body:-", bo); 
       this.listService.UpdateSite(bo).subscribe(res=>{
         this.rep = res;
         console.log("Getting Update Data :-", res);
         // this.message = this.rep.message;
           this.addToast("Patient updated successfully!!",'success');
           this.onCloseHandled();
           this.ngOnInit();
           this.uniquId='';
       },err=>{
         this.addToast("Patient Not Updated",'error');
       });
     }
     
   
}
}

onCloseHandled(){
this.display ='none';
this.ngOnInit();
this.uniquId='';
// this.PatientAddEdit.reset();
}

}
