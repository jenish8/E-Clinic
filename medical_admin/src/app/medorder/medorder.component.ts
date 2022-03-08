import { Component, OnInit ,NgZone,ViewChild,ElementRef  } from '@angular/core';
import {newsiteservice} from 'src/app/service/newsite.service';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { orderservice } from 'src/app/service/order.service';
@Component({
  selector: 'app-medorder',
  templateUrl: './medorder.component.html',
  styleUrls: ['./medorder.component.css']
})
export class MedorderComponent implements OnInit {

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
//  public popoverTitle:string="Brand Deactive Confirmation";
//  public popoverMessage:string="Are you Sure went to Deactive?";
//  public popoverTitle1:string="Brand Active Confirmation";
//  public popoverMessage1:string="Are you Sure went to Active?";
confirmClicked = false;
cancelClicked = false;


display='none';
import ="none";
public gridData: any = [];
resp:any;
BrandAddEdit: FormGroup;
importBrand:FormGroup;
BrandStatus:any;
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
private listService:orderservice,
private formBuilder: FormBuilder,
private zone:NgZone,
private toastyService: ToastyService)
{ }

ngOnInit() {
this.isSubmitted = false;
this.loading=true;
this.uid=localStorage.getItem("Brand_id");

 this.listService.getAllOrder().subscribe(res=>{
   this.resp = res;
   this.loading=false;
   console.log("Getting Data :-", this.resp);
   this.gridData = this.resp;
 });

 this.BrandAddEdit = this.formBuilder.group({
  OrderStatus: ['',[Validators.required]],
});

this.importBrand = this.formBuilder.group({
    file:['',[Validators.required]]
});

 
}




delete(id:any){
// var bo={
//   "site_id":id,
// }
this.listService.DeleteSite(id).subscribe(res=>{
 this.rep = res;
 // this.message = this.rep.message;
 this.addToast('Order Deleted Successfully!!','success');
 this.ngOnInit();
});
}


saveBrand(){
this.display= 'block';
}

edit(id:any){
this.uniquId=id;
this.listService.getSiteById(this.uniquId).subscribe(res=>{
 this.ress= res;
 this.data1=this.ress.data;
 console.log("Getting Site Details :-", this.data1);
 this.display = 'block';
 this.BrandAddEdit.reset({
   OrderStatus:this.data1.OrderStatus,
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

get f() { return this.BrandAddEdit.controls; }


onClose(){
this.import = 'none';
this.ngOnInit();
// this.importBrand.reset();
}

// onImport(){
//   this.isSubmitted = true;
//   if (this.importBrand.invalid) {
//     return;
//   }else{
//    for(var i=0;i<this.dataString.length;i++){
//     var body=this.dataString[i];
//     this.listService.createBrand(this.dataString[i]).subscribe(res=>{
//       this.rep.push(res);
//      });
//   }
//   setTimeout(() => { if(this.rep != [] ){
//     this.addToast('Brand Create Successfully','success');
//     this.ngOnInit();
//     this.import='none';
//     }else{
//     this.addToast('Brand Not Added','error');
//     }
//   },3000);
// }
// }

async onSubmit() {
  this.isSubmitted = true;
  console.log("Getting FormData :-",this.BrandAddEdit.value)
  if (this.BrandAddEdit.invalid) {
   return;
  }else{
       
      
         var bo={
           "id": this.uniquId,
           "OrderStatus":this.BrandAddEdit.value.OrderStatus,
          }
         console.log("Getting Updated Body:-", bo); 
         this.listService.UpdateSite(bo).subscribe(res=>{
           this.rep = res;
           console.log("Getting Update Data :-", res);
           // this.message = this.rep.message;
             this.addToast("Status Updated Successfully!!",'success');
             this.onCloseHandled();
             this.ngOnInit();
             this.uniquId='';
         },err=>{
           this.addToast("Status Not Updated Successfully!!",'error');
         });
       
       
     
  }
  }


onCloseHandled(){
this.display ='none';
this.ngOnInit();
this.uniquId='';
// this.BrandAddEdit.reset();
}

}
