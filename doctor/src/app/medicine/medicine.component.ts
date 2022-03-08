import { Component, OnInit ,NgZone,ViewChild,ElementRef  } from '@angular/core';
import {newsiteservice} from 'src/app/service/newsite.service';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { medicineservice } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
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
//  public popoverTitle:string="Medicine Deactive Confirmation";
//  public popoverMessage:string="Are you Sure went to Deactive?";
//  public popoverTitle1:string="Medicine Active Confirmation";
//  public popoverMessage1:string="Are you Sure went to Active?";
confirmClicked = false;
cancelClicked = false;


display='none';
import ="none";
public gridData: any = [];
resp:any;
MedicineAddEdit: FormGroup;
importMedicine:FormGroup;
MedicineStatus:any;
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
private listService:medicineservice,
private formBuilder: FormBuilder,
private zone:NgZone,
private toastyService: ToastyService)
{ }

ngOnInit() {
this.isSubmitted = false;
this.loading=true;
this.uid=localStorage.getItem("Medicine_id");

 this.listService.getAllMedicine().subscribe(res=>{
   this.resp = res;
   this.loading=false;
   console.log("Getting Data :-", this.resp);
   this.gridData = this.resp;
 });

 this.MedicineAddEdit = this.formBuilder.group({
   MedicineName: ['',[Validators.required]],
   BrandId: ['',[Validators.required]],
   Price: ['',[Validators.required]],
   Description: ['',[Validators.required]],
   Photo: ['',[Validators.required]],
   AvailableQty: ['',[Validators.required]],
 });

 this.importMedicine = this.formBuilder.group({
     file:['',[Validators.required]]
 });
 
}




deleteMedicine(id:any){
// var bo={
//   "site_id":id,
// }
this.listService.DeleteSite(id).subscribe(res=>{
 this.rep = res;
 // this.message = this.rep.message;
 this.addToast('Medicine Deleted Successfully!!','success');
 this.ngOnInit();
});
}


saveMedicine(){
this.display= 'block';
}

editMedicine(id:any){
this.uniquId=id;
this.listService.getSiteById(this.uniquId).subscribe(res=>{
 this.ress= res;
 this.data1=this.ress.data;
 console.log("Getting Site Details :-", this.data1);
 this.display = 'block';
 this.MedicineAddEdit.reset({
   MedicineName: this.data1.MedicineName,
   BrandId: this.data1.BrandId,
   Price: this.data1.Price,
   Description: this.data1.Description,
   Photo: this.data1.Photo,
   AvailableQty: this.data1.AvailableQty,
 });
});

}

tempMedicine(id:any){
  // this.uniquId=id;
   //this.listService.getSiteById(this.uniquId).subscribe(res=>{
     //this.ress= res;
    // this.data1=this.ress.data;
     //console.log("Getting Site Details :-", this.data1);
     //this.display = 'block';
     this.listService.tempDelMedicine(id).subscribe(res=>{
       //this.rep = res;
       //console.log("Getting Update Data :-", res);
       // this.message = this.rep.message;
         this.addToast("Medicine is temporarily deleted successfully!!",'success');
        // this.onCloseHandled();
         this.ngOnInit();
         //this.uniquId='';
     },err=>{
       this.addToast("Medicine is not temporarily deleted successfully!!",'error');
     });
  // });
 
 }

 regMedicine(id:any){
  // this.uniquId=id;
   //this.listService.getSiteById(this.uniquId).subscribe(res=>{
     //this.ress= res;
    // this.data1=this.ress.data;
     //console.log("Getting Site Details :-", this.data1);
     //this.display = 'block';
     this.listService.RegainMedicine(id).subscribe(res=>{
       //this.rep = res;
       //console.log("Getting Update Data :-", res);
       // this.message = this.rep.message;
         this.addToast("Medicine regained successfully!!",'success');
        // this.onCloseHandled();
         this.ngOnInit();
         //this.uniquId='';
     },err=>{
       this.addToast("Medicine not regained successfully!!",'error');
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

get f() { return this.MedicineAddEdit.controls; }


onClose(){
this.import = 'none';
this.ngOnInit();
// this.importMedicine.reset();
}

// onImport(){
//   this.isSubmitted = true;
//   if (this.importMedicine.invalid) {
//     return;
//   }else{
//    for(var i=0;i<this.dataString.length;i++){
//     var body=this.dataString[i];
//     this.listService.createMedicine(this.dataString[i]).subscribe(res=>{
//       this.rep.push(res);
//      });
//   }
//   setTimeout(() => { if(this.rep != [] ){
//     this.addToast('Medicine Create Successfully','success');
//     this.ngOnInit();
//     this.import='none';
//     }else{
//     this.addToast('Medicine Not Added','error');
//     }
//   },3000);
// }
// }

async onSubmit() {
this.isSubmitted = true;
console.log("Getting FormData :-",this.MedicineAddEdit.value)
if (this.MedicineAddEdit.invalid) {
 return;
}else{
     if(!this.uniquId){
       var body={
           "MedicineName":this.MedicineAddEdit.value.MedicineName,
           "BrandId":this.MedicineAddEdit.value.BrandId,
           "Price":this.MedicineAddEdit.value.Price,
           "Description":this.MedicineAddEdit.value.Description,
           "Photo":this.MedicineAddEdit.value.Photo,
           "AvailableQty":this.MedicineAddEdit.value.AvailableQty,
          }
       console.log("Getting Create Medicine :-", body);
       this.listService.createMedicine(body).subscribe(res=>{
        this.rep = res;
           this.addToast('New Medicine Added Successfully','success');
             this.onCloseHandled();
             this.ngOnInit();
       },err=>{
         this.addToast("New Medicine Not Added! Please Try Again!!",'error');
         this.onCloseHandled();
         this.ngOnInit();
       });
     }
     else{
       var bo={
         "id": this.uniquId,
         "MedicineName":this.MedicineAddEdit.value.MedicineName,
         "BrandId":this.MedicineAddEdit.value.BrandId,
         "Price":this.MedicineAddEdit.value.Price,
         "Description":this.MedicineAddEdit.value.Description,
         "Photo":this.MedicineAddEdit.value.Photo,
         "AvailableQty":this.MedicineAddEdit.value.AvailableQty,
        }
       console.log("Getting Updated Body:-", bo); 
       this.listService.UpdateSite(bo).subscribe(res=>{
         this.rep = res;
         console.log("Getting Update Data :-", res);
         // this.message = this.rep.message;
           this.addToast("Medicine Updated Successfully!!",'success');
           this.onCloseHandled();
           this.ngOnInit();
           this.uniquId='';
       },err=>{
         this.addToast("Medicine Not Updated Successfully!!",'error');
       });
     }
     
   
}
}

onCloseHandled(){
this.display ='none';
this.ngOnInit();
this.uniquId='';
// this.MedicineAddEdit.reset();
}
}
