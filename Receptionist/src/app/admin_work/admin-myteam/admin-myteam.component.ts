import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
//add Toast Module
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { dashboardService } from '../../service/dashboard.service';
import { productService } from '../../service/adminService/product.service';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';

@Component({
  selector: 'admin-myteam',
  templateUrl: './admin-myteam.component.html',
  styleUrls: ['./admin-myteam.component.css']
})

export class AdminMyteamComponent implements OnInit {
   //for toast show
   position = 'top-center';
   title: string;
   msg: string;
   showClose = true;
   timeout = 5000;
   theme = 'bootstrap';
   type = 'default';
   closeOther = false;

  public gridData: any = [];

  isSubmitted = false;
  dataString:any;
  public value:Date=new Date();
  public value1:Date=new Date();
  message:any;
  ress:any;
  r:any;
  data1:any;
  loading:boolean;
  rep:any=[];

  userid:any;
  stresp:any;
  allstate:any;
  state_id:any;
  diresp:any;
  alldist:any;
  dist_id:any;
  devesp:any;
  alldevice:any;
  device_id:any;
  sdata:any;
  deviceData:any;
  cf:any;
  mp:any;
  op:any;
  lastDate:any;
  startDate:any;
  did:any;

   constructor(
    private formBuilder: FormBuilder,
    private toastyService: ToastyService,
    private listingService: productService,
    private Datepipe:DatePipe,
    private dbservice: dashboardService)
   { }

   ngOnInit() {
    this.loading=true;
    this.userid = localStorage.getItem("user_id"); 
var body={
  "userId":this.userid
}
this.dbservice.getAllState(body).subscribe(res=>{
  this.stresp=res;
  this.allstate=this.stresp.state;
  this.state_id=this.allstate[0];

  var body1={
      "userId":this.userid,
      "state_name": this.state_id.state
  }
  this.dbservice.getDist(body1).subscribe(res=>{
    this.diresp=res
    this.alldist=this.diresp.dist;
    this.dist_id=this.alldist[0];
    var body2={
      "userId":this.userid,
      "district": this.dist_id.district
   }
  this.dbservice.getDevice(body2).subscribe(res=>{
    this.devesp=res
    this.alldevice=this.devesp.msg;
    this.device_id=this.alldevice[0];
  })
  })
})    
  } 

  addToast(msgg:any,type:any) {
    // this.position = this.position;
    const toastOptions: ToastOptions = {
      title: "Mehta Cad Cam",
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

  onChangeState(){
    this.loading=true;
    var body1={
      "userId":this.userid,
      "state_name": this.state_id.state
  }
  this.dbservice.getDist(body1).subscribe(res=>{
    this.diresp=res
    this.alldist=this.diresp.dist;
    this.dist_id=this.alldist[0];

    var body2={
      "userId":this.userid,
      "district": this.dist_id.district
   }
  this.dbservice.getDevice(body2).subscribe(res=>{
    this.devesp=res
    this.alldevice=this.devesp.msg;
    this.device_id=this.alldevice[0];
      console.log("Getting Data: -",this.sdata);
      },error=>{
        this.loading=false;
        this.addToast("Data Not Found!",'error');
    })
  })
  }

  onChangeDistrict(){
    this.loading=true;
    var body2={
      "userId":this.userid,
      "district": this.dist_id.district
   }
  this.dbservice.getDevice(body2).subscribe(res=>{
    this.devesp=res
    this.alldevice=this.devesp.msg;
    this.device_id=this.alldevice[0];
        console.log("Getting Data: -",this.sdata);
      },error=>{
        this.loading=false;
        this.addToast("Data Not Found!",'error');
    })
  }

  onSubmit(){
    this.loading=true;
    let fromdate =this.value.toLocaleDateString();
    this.startDate = this.Datepipe.transform(fromdate,'yyyy-MM-dd');
    let enddate =this.value1.toLocaleDateString();
    this.lastDate = this.Datepipe.transform(enddate,'yyyy-MM-dd');
    this.did=this.device_id.device_id.split(":- ")
    var body3={
            "device_id":this.did[1],
            "start":this.startDate,
            "end":this.lastDate
            }
this.dbservice.getSummaryData(body3).subscribe(res=>{
  this.sdata=res;
  this.deviceData=this.sdata.msg;
  console.log("Getting DeviceData :-", this.sdata);
  this.gridData=this.deviceData
},error=>{
  this.loading=false;
  this.addToast("Data Not Found!",'error');
})
 }
}

