import { Component, OnInit ,NgZone,ViewChild,ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import {clinicservice} from 'src/app/service/clinic.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
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
//  public popoverTitle:string="Clinic Deactive Confirmation";
//  public popoverMessage:string="Are you Sure went to Deactive?";
//  public popoverTitle1:string="Clinic Active Confirmation";
//  public popoverMessage1:string="Are you Sure went to Active?";
confirmClicked = false;
cancelClicked = false;


display='none';
import ="none";
public gridData: any = [];
resp:any;
ClinicAddEdit: FormGroup;
importClinic:FormGroup;
ClinicStatus:any;
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
private listService:clinicservice,
private formBuilder: FormBuilder,
private zone:NgZone,
private toastyService: ToastyService)
{ }

ngOnInit() {
this.isSubmitted = false;
this.loading=true;
this.uid=localStorage.getItem("Clinic_id");

  this.listService.getAllClinic().subscribe(res=>{
    this.resp = res;
    this.loading=false;
    console.log("Getting Data :-", this.resp);
    this.gridData = this.resp;
  });

  this.ClinicAddEdit = this.formBuilder.group({
    ClinicName: ['',[Validators.required]],
    Address: ['',[Validators.required]],
    ContactNo: ['',[Validators.required]],
    AboutUs: ['',[Validators.required]],
    NewPatientFees: ['',[Validators.required]],
    OldPatientFees: ['',[Validators.required]],
    VideoConsultationFees: ['',[Validators.required]],
  });

  this.importClinic = this.formBuilder.group({
      file:['',[Validators.required]]
  });
  
}




deleteClinic(id:any){
// var bo={
//   "site_id":id,
// }
this.listService.DeleteSite(id).subscribe(res=>{
  this.rep = res;
  // this.message = this.rep.message;
  this.addToast('Clinic Deleted Successfully!!','success');
  this.ngOnInit();
});
}


saveClinic(){
this.display= 'block';
}

editClinic(id:any){
this.uniquId=id;
this.listService.getSiteById(this.uniquId).subscribe(res=>{
  this.ress= res;
  this.data1=this.ress.data;
  console.log("Getting Site Details :-", this.data1);
  this.display = 'block';
  this.ClinicAddEdit.reset({
    ClinicName: this.data1.ClinicName,
    Address: this.data1.Address,
    ContactNo: this.data1.ContactNo,
    AboutUs: this.data1.AboutUs,
    NewPatientFees: this.data1.NewPatientFees,
    OldPatientFees: this.data1.OldPatientFees,
    VideoConsultationFees: this.data1.VideoConsultationFees,
  });
});

}

tempClinic(id:any){
  // this.uniquId=id;
   //this.listService.getSiteById(this.uniquId).subscribe(res=>{
     //this.ress= res;
    // this.data1=this.ress.data;
     //console.log("Getting Site Details :-", this.data1);
     //this.display = 'block';
     this.listService.tempDelClinic(id).subscribe(res=>{
       //this.rep = res;
       //console.log("Getting Update Data :-", res);
       // this.message = this.rep.message;
         this.addToast("Clinic is temporarily deleted successfully!!",'success');
        // this.onCloseHandled();
         this.ngOnInit();
         //this.uniquId='';
     },err=>{
       this.addToast("Clinic is not temporarily deleted successfully!!",'error');
     });
  // });
 
 }

 regClinic(id:any){
  // this.uniquId=id;
   //this.listService.getSiteById(this.uniquId).subscribe(res=>{
     //this.ress= res;
    // this.data1=this.ress.data;
     //console.log("Getting Site Details :-", this.data1);
     //this.display = 'block';
     this.listService.RegainClinic(id).subscribe(res=>{
       //this.rep = res;
       //console.log("Getting Update Data :-", res);
       // this.message = this.rep.message;
         this.addToast("Clinic regained successfully!!",'success');
        // this.onCloseHandled();
         this.ngOnInit();
         //this.uniquId='';
     },err=>{
       this.addToast("Clinic regained successfully!!",'error');
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

get f() { return this.ClinicAddEdit.controls; }


onClose(){
this.import = 'none';
this.ngOnInit();
// this.importClinic.reset();
}

// onImport(){
//   this.isSubmitted = true;
//   if (this.importClinic.invalid) {
//     return;
//   }else{
//    for(var i=0;i<this.dataString.length;i++){
//     var body=this.dataString[i];
//     this.listService.createClinic(this.dataString[i]).subscribe(res=>{
//       this.rep.push(res);
//      });
//   }
//   setTimeout(() => { if(this.rep != [] ){
//     this.addToast('Clinic Create Successfully','success');
//     this.ngOnInit();
//     this.import='none';
//     }else{
//     this.addToast('Clinic Not Added','error');
//     }
//   },3000);
// }
// }

async onSubmit() {
this.isSubmitted = true;
console.log("Getting FormData :-",this.ClinicAddEdit.value)
if (this.ClinicAddEdit.invalid) {
  return;
}else{
      if(!this.uniquId){
        var body={
            "ClinicName":this.ClinicAddEdit.value.ClinicName,
            "Address":this.ClinicAddEdit.value.Address,
            "ContactNo":this.ClinicAddEdit.value.ContactNo,
            "AboutUs":this.ClinicAddEdit.value.AboutUs,
            "NewPatientFees":this.ClinicAddEdit.value.NewPatientFees,
            "OldPatientFees":this.ClinicAddEdit.value.OldPatientFees,
            "VideoConsultationFees":this.ClinicAddEdit.value.VideoConsultationFees,
           }
        console.log("Getting Create Clinic :-", body);
        this.listService.createClinic(body).subscribe(res=>{
         this.rep = res;
            this.addToast('New Clinic Created Successfully','success');
              this.onCloseHandled();
              this.ngOnInit();
        },err=>{
          this.addToast("Clinic Not Added! Please Try Again!!",'error');
          this.onCloseHandled();
          this.ngOnInit();
        });
      }
      else{
        var bo={
          "id": this.uniquId,
          "ClinicName":this.ClinicAddEdit.value.ClinicName,
          "Address":this.ClinicAddEdit.value.Address,
          "ContactNo":this.ClinicAddEdit.value.ContactNo,
          "AboutUs":this.ClinicAddEdit.value.AboutUs,
          "NewPatientFees":this.ClinicAddEdit.value.NewPatientFees,
          "OldPatientFees":this.ClinicAddEdit.value.OldPatientFees,
          "VideoConsultationFees":this.ClinicAddEdit.value.VideoConsultationFees,
         }
        console.log("Getting Updated Body:-", bo); 
        this.listService.UpdateSite(bo).subscribe(res=>{
          this.rep = res;
          console.log("Getting Update Data :-", res);
          // this.message = this.rep.message;
            this.addToast("Clinic Updated Successfully!!",'success');
            this.onCloseHandled();
            this.ngOnInit();
            this.uniquId='';
        },err=>{
          this.addToast("Clinic Not Updated Successfully!!",'error');
        });
      }
      
    
}
}

onCloseHandled(){
this.display ='none';
this.ngOnInit();
this.uniquId='';
// this.ClinicAddEdit.reset();
}
}
