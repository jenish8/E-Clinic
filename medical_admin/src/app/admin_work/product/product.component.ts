import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
//add Toast Module
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { dashboardService } from '../../service/dashboard.service';
import { productService } from '../../service/adminService/product.service';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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
  ChartValue:any="Output Power";
  did:any;

  config:zingchart.graphset = {};
  config1:zingchart.graphset = {};
  config2:zingchart.graphset = {};

  constructor(
         private formBuilder: FormBuilder,
         private toastyService: ToastyService,
         private listingService: productService,
         private Datepipe:DatePipe,
         private dbservice: dashboardService
        ) { }

      ngOnInit() {
        this.loading=true;
        this.userid = localStorage.getItem("user_id");
        let fromdate =this.value.toLocaleDateString();
       this.lastDate = this.Datepipe.transform(fromdate,'dd/MM/yyyy'); 
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
        this.did=this.device_id.device_id.split(":- ")
        var body3={
                "device_id":this.did[1],
                "date":this.lastDate
                }
          this.dbservice.getHistoricalDate(body3).subscribe(res=>{
            this.sdata=res;
            this.deviceData=this.sdata.hisdata;
            this.gridData=this.deviceData.table_data;
              this.cf=this.deviceData.cf;
              console.log("Getting CF Value :-", this.cf);
              this.mp=this.deviceData.ipss;
              this.op=this.deviceData.outputp;
              if(this.op.lenght != 0){
                this.config2={
                  type: 'line', 
                  plot: {
                    decimals: 5,
                    tooltip: {
                      "decimals": 4,
                      'background-color': "white",
                      'border-width': 1,
                      "font-color":"black",
                      'border-color': "black",
                      'border-radius': "9px",
                      padding: "5%",
                      callout: true
                    },
                    marker: {
                        size:1,
                        "border-width":0,
                    }
                  },
                    series: [{ values: this.op }] 
                }
              }
            console.log("Getting Data: -",this.sdata);
          },error=>{
            this.loading=false;
            this.addToast("Data Not Found!",'error');
          })
        })
      })
    })
  }

  onChangeState(){
    this.loading=true;
    let fromdate =this.value.toLocaleDateString();
    this.lastDate = this.Datepipe.transform(fromdate,'dd/MM/yyyy');
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
    this.did=this.device_id.device_id.split(":- ")
    var body3={
            "device_id":this.did[1],
            "date":this.lastDate
            }
      this.dbservice.getHistoricalDate(body3).subscribe(res=>{
        this.sdata=res;
        this.deviceData=this.sdata.hisdata;
        this.gridData=this.deviceData.table_data;
          this.cf=this.deviceData.cf;
          console.log("Getting CF Value :-", this.cf);
          this.mp=this.deviceData.ipss;
          this.op=this.deviceData.outputp;
          if(this.op.lenght != 0){
            this.config2={
              type: 'line', 
              plot: {
                decimals: 5,
                tooltip: {
                  "decimals": 4,
                  'background-color': "white",
                  'border-width': 1,
                  "font-color":"black",
                  'border-color': "black",
                  'border-radius': "9px",
                  padding: "5%",
                  callout: true
                },
                marker: {
                    size:1,
                    "border-width":0,
                }
              },
                series: [{ values: this.op }] 
            }
          }
        console.log("Getting Data: -",this.sdata);
      },error=>{
        this.loading=false;
        this.addToast("Data Not Found!",'error');
      })
    })
  })
  }

  onChangeDistrict(){
    this.loading=true;
    let fromdate =this.value.toLocaleDateString();
    this.lastDate = this.Datepipe.transform(fromdate,'dd/MM/yyyy');
    var body2={
      "userId":this.userid,
      "district": this.dist_id.district
   }
  this.dbservice.getDevice(body2).subscribe(res=>{
    this.devesp=res
    this.alldevice=this.devesp.msg;
    this.device_id=this.alldevice[0];
    this.did=this.device_id.device_id.split(":- ")
    var body3={
            "device_id":this.did[1],
            "date":this.lastDate
            }
      this.dbservice.getHistoricalDate(body3).subscribe(res=>{
        this.sdata=res;
        this.deviceData=this.sdata.hisdata;
        this.gridData=this.deviceData.table_data;
          this.cf=this.deviceData.cf;
          this.mp=this.deviceData.ipss;
          this.op=this.deviceData.outputp;
          if(this.op.lenght != 0){
            this.config2={
              type: 'line', 
              plot: {
                decimals: 5,
                tooltip: {
                  "decimals": 4,
                  'background-color': "white",
                  'border-width': 1,
                  "font-color":"black",
                  'border-color': "black",
                  'border-radius': "9px",
                  padding: "5%",
                  callout: true
                },
                marker: {
                    size:1,
                    "border-width":0,
                }
              },
                series: [{ values: this.op }] 
            }
          }
        console.log("Getting Data: -",this.sdata);
      },error=>{
        this.loading=false;
        this.addToast("Data Not Found!",'error');
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



      onSubmit(){
        this.loading=true;
        let fromdate =this.value.toLocaleDateString();
        this.lastDate = this.Datepipe.transform(fromdate,'dd/MM/yyyy');
        this.did=this.device_id.device_id.split(":- ")
        var body3={
                "device_id":this.did[1],
                "date":this.lastDate
                }
    this.dbservice.getHistoricalDate(body3).subscribe(res=>{
      this.sdata=res;
      this.deviceData=this.sdata.hisdata;
      console.log("Getting DeviceData :-", this.sdata);
      this.gridData=this.deviceData.table_data;
        this.cf=this.deviceData.cf;
        this.mp=this.deviceData.ipss;
        this.op=this.deviceData.outputp;
        if(this.op.lenght != 0){
          this.config2={
            type: 'line', 
            plot: {
              decimals: 5,
              tooltip: {
                "decimals": 4,
                'background-color': "white",
                'border-width': 1,
                "font-color":"black",
                'border-color': "black",
                'border-radius': "9px",
                padding: "5%",
                callout: true
              },
              marker: {
                  size:1,
                  "border-width":0,
              }
            },
              series: [{ values: this.op }] 
          }
        }
      console.log("Getting Data: -",this.sdata);
    },error=>{
      this.loading=false;
      this.addToast("Data Not Found!",'error');
    })
     }


     filter1(data:any){
      this.ChartValue=data;
      if(this.ChartValue == 'Output Power'){
       this.op=this.deviceData.outputp;
       if(this.op.lenght != 0){
         this.config2={
           type: 'line', 
           plot: {
             decimals: 5,
             tooltip: {
               "decimals": 4,
               'background-color': "white",
               'border-width': 1,
               "font-color":"black",
               'border-color': "black",
               'border-radius': "9px",
               padding: "5%",
               callout: true
             },
             marker: {
                 size:1,
                 "border-width":0,
             }
           },
             series: [{ values: this.op }] 
         }
        }
      }
      else if(this.ChartValue == 'DC Current'){
       this.op=this.deviceData.dch;
       if(this.op.lenght != 0){
         this.config2={
           type: 'line', 
           plot: {
             decimals: 5,
             tooltip: {
               "decimals": 4,
               'background-color': "white",
               'border-width': 1,
               "font-color":"black",
               'border-color': "black",
               'border-radius': "9px",
               padding: "5%",
               callout: true
             },
             marker: {
                 size:1,
                 "border-width":0,
             }
           },
             series: [{ values: this.op }] 
         }
        }
      }
      else if(this.ChartValue == 'DC Voltage'){
       this.op=this.deviceData.dvv;
       if(this.op.lenght != 0){
         this.config2={
           type: 'line', 
           plot: {
             decimals: 5,
             tooltip: {
               "decimals": 4,
               'background-color': "white",
               'border-width': 1,
               "font-color":"black",
               'border-color': "black",
               'border-radius': "9px",
               padding: "5%",
               callout: true
             },
             marker: {
                 size:1,
                 "border-width":0,
             }
           },
             series: [{ values: this.op }] 
         }
        }
      }
 
      else if(this.ChartValue == 'Motor V'){
       this.op=this.deviceData.ipss;
       if(this.op.lenght != 0){
       this.config2={
         type: 'line', 
         plot: {
           decimals: 5,
           tooltip: {
             "decimals": 4,
             'background-color': "white",
             'border-width': 1,
             "font-color":"black",
             'border-color': "black",
             'border-radius': "9px",
             padding: "5%",
             callout: true
           },
           marker: {
               size:1,
               "border-width":0,
           }
         },
           series: [{ values: this.op }] 
       }
        }
      }
   }
}
