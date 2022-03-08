import { Component, OnInit ,NgZone,ViewChild,ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import {Timeservice} from 'src/app/service/aptime.service';

@Component({
  selector: 'app-aptime',
  templateUrl: './aptime.component.html',
  styleUrls: ['./aptime.component.css']
})
export class AptimeComponent implements OnInit {
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
//  public popoverTitle:string="Time Deactive Confirmation";
//  public popoverMessage:string="Are you Sure went to Deactive?";
//  public popoverTitle1:string="Time Active Confirmation";
//  public popoverMessage1:string="Are you Sure went to Active?";
confirmClicked = false;
cancelClicked = false;


display='none';
import ="none";
public gridData: any = [];
resp:any;
TimeAddEdit: FormGroup;
importTime:FormGroup;
TimeStatus:any;
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
private listService:Timeservice,
private formBuilder: FormBuilder,
private zone:NgZone,
private toastyService: ToastyService)
{ }

ngOnInit() {
this.isSubmitted = false;
this.loading=true;
this.uid=localStorage.getItem("Time_id");

 this.listService.getAllTime().subscribe(res=>{
   this.resp = res;
   this.loading=false;
   console.log("Getting Data :-", this.resp);
   this.gridData = this.resp;
 });

 this.TimeAddEdit = this.formBuilder.group({
   timeSlot: ['',[Validators.required]],
   status: ['',[Validators.required]],
 });

 this.importTime = this.formBuilder.group({
     file:['',[Validators.required]]
 });
 
}




deleteTime(id:any){
// var bo={
//   "site_id":id,
// }
this.listService.DeleteSite(id).subscribe(res=>{
 this.rep = res;
 // this.message = this.rep.message;
 this.addToast('Time Deleted Successfully!!','success');
 this.ngOnInit();
});
}


saveTime(){
this.display= 'block';
}

editTime(id:any){
this.uniquId=id;
this.listService.getSiteById(this.uniquId).subscribe(res=>{
 this.ress= res;
 this.data1=this.ress.data;
 console.log("Getting Site Details :-", this.data1);
 this.display = 'block';
 this.TimeAddEdit.reset({
   timeSlot: this.data1.timeSlot,
   status: this.data1.status,
 });
});

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

get f() { return this.TimeAddEdit.controls; }


onClose(){
this.import = 'none';
this.ngOnInit();
// this.importTime.reset();
}

// onImport(){
//   this.isSubmitted = true;
//   if (this.importTime.invalid) {
//     return;
//   }else{
//    for(var i=0;i<this.dataString.length;i++){
//     var body=this.dataString[i];
//     this.listService.createTime(this.dataString[i]).subscribe(res=>{
//       this.rep.push(res);
//      });
//   }
//   setTimeout(() => { if(this.rep != [] ){
//     this.addToast('Time Create Successfully','success');
//     this.ngOnInit();
//     this.import='none';
//     }else{
//     this.addToast('Time Not Added','error');
//     }
//   },3000);
// }
// }

async onSubmit() {
this.isSubmitted = true;
console.log("Getting FormData :-",this.TimeAddEdit.value)
if (this.TimeAddEdit.invalid) {
 return;
}else{
     if(!this.uniquId){
       var body={
           "timeSlot":this.TimeAddEdit.value.timeSlot,
           "status":this.TimeAddEdit.value.status,
          }
       console.log("Getting Create Time :-", body);
       this.listService.createTime(body).subscribe(res=>{
        this.rep = res;
           this.addToast('New Time Created Successfully','success');
             this.onCloseHandled();
             this.ngOnInit();
       },err=>{
         this.addToast("Time Not Added! Please Try Again!!",'error');
         this.onCloseHandled();
         this.ngOnInit();
       });
     }
     else{
       var bo={
         "id": this.uniquId,
         "timeSlot":this.TimeAddEdit.value.timeSlot,
         "status":this.TimeAddEdit.value.status,
        }
       console.log("Getting Updated Body:-", bo); 
       this.listService.UpdateSite(bo).subscribe(res=>{
         this.rep = res;
         console.log("Getting Update Data :-", res);
         // this.message = this.rep.message;
           this.addToast("Time Updated Successfully!!",'success');
           this.onCloseHandled();
           this.ngOnInit();
           this.uniquId='';
       },err=>{
         this.addToast("Time Not Updated Successfully!!",'error');
       });
     }
     
   
}
}

onCloseHandled(){
this.display ='none';
this.ngOnInit();
this.uniquId='';
// this.TimeAddEdit.reset();
}
}
