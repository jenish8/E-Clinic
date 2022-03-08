import { Component, OnInit ,NgZone,ViewChild,ElementRef  } from '@angular/core';
import {newsiteservice} from 'src/app/service/newsite.service';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
//map module
import { MapsAPILoader } from '@agm/core';
import { google } from '@google/maps';
declare var google: any;
//add Toast Module
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

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
    //  public popoverTitle:string="Customer Deactive Confirmation";
    //  public popoverMessage:string="Are you Sure went to Deactive?";
    //  public popoverTitle1:string="Customer Active Confirmation";
    //  public popoverMessage1:string="Are you Sure went to Active?";
    confirmClicked = false;
    cancelClicked = false;


  display='none';
  import ="none";
  public gridData: any = [];
  resp:any;
  customerAddEdit: FormGroup;
  importCustomer:FormGroup;
  CustomerStatus:any;
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
    private listService:newsiteservice,
    private formBuilder: FormBuilder,
   private mapsAPILoader:MapsAPILoader,
   private zone:NgZone,
   private toastyService: ToastyService)
   { }

  ngOnInit() {
    this.isSubmitted = false;
    this.loading=true;
    this.uid=localStorage.getItem("user_id");

      this.listService.getAllDep().subscribe(res=>{
        this.resp = res;
        this.loading=false;
        console.log("Getting Data :-", this.resp);
        this.gridData = this.resp;
      });

      this.customerAddEdit = this.formBuilder.group({
        orderStatus: ['',[Validators.required]],
        customerType: ['',[Validators.required]],
        paymentTerms: ['',[Validators.required]],
        delivertyTerms: ['',[Validators.required]],
        ceurrency: ['',[Validators.required]],
        region: ['',[Validators.required]],
        packaging: ['',[Validators.required]],
        partsStatus: ['',[Validators.required]],
        uom: ['',[Validators.required]],
        productGroup: ['',[Validators.required]],
        productCategory: ['',[Validators.required]],
        subCategory: ['',[Validators.required]],
        hsnCode: ['',[Validators.required]],
        country: ['',[Validators.required]],
        positionCategory: ['',[Validators.required]],
        departmentCategory: ['',[Validators.required]],
        courierCompanyName: ['',[Validators.required]],
        Warehouse: ['',[Validators.required]],
        ffAccount: ['',[Validators.required]],
        tax: ['',[Validators.required]],
        taxPercentage: ['',[Validators.required]],
        groupOfCompany: ['',[Validators.required]],
      });

      this.importCustomer = this.formBuilder.group({
          file:['',[Validators.required]]
      });
      
  }




  deleteCustomer(id:any){
    // var bo={
    //   "site_id":id,
    // }
    this.listService.DeleteSite(id).subscribe(res=>{
      this.rep = res;
      // this.message = this.rep.message;
      this.addToast('Dep & Low Deleted Successfully!!','success');
      this.ngOnInit();
    });
  }


  saveCustomer(){
  	this.display= 'block';
  }

  editCustomer(id:any){
    this.uniquId=id;
    this.listService.getSiteById(this.uniquId).subscribe(res=>{
      this.ress= res;
      this.data1=this.ress.data;
      console.log("Getting Site Details :-", this.data1);
      this.display = 'block';
      this.customerAddEdit.reset({
        orderStatus: this.data1.orderStatus,
        customerType: this.data1.customerType,
        paymentTerms: this.data1.paymentTerms,
        delivertyTerms: this.data1.delivertyTerms,
        ceurrency: this.data1.ceurrency,
        region: this.data1.region,
        packaging: this.data1.packaging,
        partsStatus: this.data1.partsStatus,
        uom: this.data1.uom,
        productGroup: this.data1.productGroup,
        productCategory: this.data1.productCategory,
        subCategory: this.data1.subCategory,
        hsnCode: this.data1.hsnCode,
        country: this.data1.country,
        positionCategory: this.data1.positionCategory,
        departmentCategory:this.data1.departmentCategory,
        courierCompanyName: this.data1.courierCompanyName,
        Warehouse: this.data1.Warehouse,
        ffAccount: this.data1.ffAccount,
        tax: this.data1.tax,
        taxPercentage: this.data1.taxPercentage,
        groupOfCompany: this.data1.groupOfCompany,
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

  get f() { return this.customerAddEdit.controls; }


  onClose(){
    this.import = 'none';
    this.ngOnInit();
    // this.importCustomer.reset();
  }

  // onImport(){
  //   this.isSubmitted = true;
  //   if (this.importCustomer.invalid) {
  //     return;
  //   }else{
  //    for(var i=0;i<this.dataString.length;i++){
  //     var body=this.dataString[i];
  //     this.listService.createCustomer(this.dataString[i]).subscribe(res=>{
  //       this.rep.push(res);
  //      });
  //   }
  //   setTimeout(() => { if(this.rep != [] ){
  //     this.addToast('Customer Create Successfully','success');
  //     this.ngOnInit();
  //     this.import='none';
  //     }else{
  //     this.addToast('Customer Not Added','error');
  //     }
  //   },3000);
  // }
  // }

  async onSubmit() {
    this.isSubmitted = true;
    console.log("Getting FormData :-",this.customerAddEdit.value)
    if (this.customerAddEdit.invalid) {
      return;
    }else{
          if(!this.uniquId){
            var body={
                "orderStatus":this.customerAddEdit.value.orderStatus,
                "customerType":this.customerAddEdit.value.customerType,
                "paymentTerms":this.customerAddEdit.value.paymentTerms,
                "delivertyTerms":this.customerAddEdit.value.delivertyTerms,
                "ceurrency":this.customerAddEdit.value.ceurrency,
                "region":this.customerAddEdit.value.region,
                "packaging":this.customerAddEdit.value.packaging,
                "partsStatus":this.customerAddEdit.value.partsStatus,
                "uom":this.customerAddEdit.value.uom,
                "productGroup":this.customerAddEdit.value.productGroup,
                "productCategory":this.customerAddEdit.value.productCategory,
                "subCategory":this.customerAddEdit.value.subCategory,
                "hsnCode":this.customerAddEdit.value.hsnCode,
                "country":this.customerAddEdit.value.country,
                "positionCategory":this.customerAddEdit.value.positionCategory,
                "departmentCategory":this.customerAddEdit.value.departmentCategory,
                "courierCompanyName":this.customerAddEdit.value.courierCompanyName,
                "Warehouse":this.customerAddEdit.value.Warehouse,
                "ffAccount":this.customerAddEdit.value.ffAccount,
                "tax":this.customerAddEdit.value.tax,
                "taxPercentage":this.customerAddEdit.value.taxPercentage,
                "groupOfCompany":this.customerAddEdit.value.groupOfCompany,
               }
            console.log("Getting Create Customer :-", body);
            this.listService.createDep(body).subscribe(res=>{
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
              "orderStatus":this.customerAddEdit.value.orderStatus,
              "customerType":this.customerAddEdit.value.customerType,
              "paymentTerms":this.customerAddEdit.value.paymentTerms,
              "delivertyTerms":this.customerAddEdit.value.delivertyTerms,
              "ceurrency":this.customerAddEdit.value.ceurrency,
              "region":this.customerAddEdit.value.region,
              "packaging":this.customerAddEdit.value.packaging,
              "partsStatus":this.customerAddEdit.value.partsStatus,
              "uom":this.customerAddEdit.value.uom,
              "productGroup":this.customerAddEdit.value.productGroup,
              "productCategory":this.customerAddEdit.value.productCategory,
              "subCategory":this.customerAddEdit.value.subCategory,
              "hsnCode":this.customerAddEdit.value.hsnCode,
              "country":this.customerAddEdit.value.country,
              "positionCategory":this.customerAddEdit.value.positionCategory,
              "departmentCategory":this.customerAddEdit.value.departmentCategory,
              "courierCompanyName":this.customerAddEdit.value.courierCompanyName,
              "Warehouse":this.customerAddEdit.value.Warehouse,
              "ffAccount":this.customerAddEdit.value.ffAccount,
              "tax":this.customerAddEdit.value.tax,
              "taxPercentage":this.customerAddEdit.value.taxPercentage,
              "groupOfCompany":this.customerAddEdit.value.groupOfCompany,
             }
            console.log("Getting Updated Body:-", bo); 
            this.listService.UpdateSite(bo).subscribe(res=>{
              this.rep = res;
              console.log("Getting Update Data :-", res);
              // this.message = this.rep.message;
                this.addToast(this.rep.msg,'success');
                this.onCloseHandled();
                this.ngOnInit();
                this.uniquId='';
            },err=>{
              this.addToast("Dep & Low Not Updated Successfully!!",'error');
            });
          }
          
        
    }
  }

  onCloseHandled(){
    this.display ='none';
    this.ngOnInit();
    this.uniquId='';
    // this.customerAddEdit.reset();
  }

}
