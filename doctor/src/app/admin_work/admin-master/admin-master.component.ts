import {Component, OnInit, ViewEncapsulation , ViewChild} from '@angular/core';
import { dashboardService } from '../../service/dashboard.service';
import { DatePipe } from '@angular/common';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import {newsiteservice} from 'src/app/service/newsite.service';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';

@Component({
  selector: 'app-admin-master',
  templateUrl: './admin-master.component.html',
  styleUrls: ['./admin-master.component.css']
})
export class AdminMasterComponent implements OnInit {

  //for toast show
  position = 'top-center';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  
  resp:any;
  userid:any;

  loading:boolean;

  date:any;
  currentDate:any;

  stresp:any;

  state_id: any;
  allstate: Array<{ state: string}>;

  diresp:any;
  dist_id:any;
  alldist:Array<{ district:string}>;

  devesp:any;
  device_id:any;
  alldevice:Array<{ msg:string}>;

  sdata:any;
  datetime:any;
  deviceData:any;
  nowGenrating:any;
  totalGenrating:any;
  flowRate:any;
  totalFlow:any;
  totalonTime:any;
  dcVoltage:any;
  dcCurrent:any;
  motorPower:any;
  motorCurrent:any;
  motorSpeed:any;
  motorVoltage:any;
  gridData:any;

  cfy:any=[];
  cf:any;
  cfx:any=[];
  series:any[];

  mpy:any=[];
  mp:any;
  mpx:any=[];
  mpSeries:any[];

  opy:any=[];
  op:any;
  opx:any=[];
  opSeries:any[];

  crossingValues:any=[];
  sitedata:any;

  ChartValue:any="Output Power";
  display='none';

  config:zingchart.graphset = {};
  config1:zingchart.graphset = {};
  config2:zingchart.graphset = {};

  siteAddEdit: FormGroup;
  isSubmitted = false;
  rep:any;
  uid:any;

  constructor(
          private listService:newsiteservice,
          private formBuilder: FormBuilder,
          private datepipe:DatePipe,
          private toastyService: ToastyService,
          private dbservice:dashboardService) {}

          public seriesData: number[] = [2034, 40124, 45234, 30234, 50234];

          public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];

          public value = 60;
  ngOnInit() {
    this.uid=localStorage.getItem("user_id");
    this.crossingValues= [0, 1000];
    this.date = new Date();
    this.currentDate = this.datepipe.transform(this.date,'yyyy-MM-dd');
    this.userid = localStorage.getItem("user_id");
    var body={
      "userId":this.userid
    }
      this.dbservice.getUnregisteredDevice().subscribe(res=>{
        this.devesp=res
        this.alldevice=this.devesp.device_list;
        this.device_id=this.alldevice[0];
        var body3={
                "deviceId":this.device_id.device_id,
                }
          this.dbservice.getDeviceDate(body3).subscribe(res=>{
              this.sdata=res;
              this.loading=false;
              this.deviceData=this.sdata.data;
              this.datetime=this.deviceData.date+" "+this.deviceData.time;
              this.nowGenrating=this.deviceData.output_power;
              this.totalGenrating=this.deviceData.total_energy;
              this.flowRate=this.deviceData.current_flow;
              this.totalFlow=this.deviceData.total_flow;
              this.totalonTime=this.deviceData.total_on_time;
              this.dcVoltage=this.deviceData.dv_v;
              this.dcCurrent=this.deviceData.dc_c;
              this.motorPower=this.deviceData.inst_power;
              this.motorCurrent=this.deviceData.motor_c;
              this.motorSpeed=this.deviceData.motor_speed;
              this.motorVoltage=this.deviceData.motor_v;
              this.gridData=this.deviceData.table_data;
              this.sitedata=this.deviceData.sitedetails;
              this.cf=this.deviceData.cf;
              console.log("Getting CF Value :-", this.sitedata);
              this.mp=this.deviceData.ipss;
              this.op=this.deviceData.outputp;
              if(this.cf.lenght != 0){
                // for(var i=0;i<this.cf.length;i++){
                //   this.cfx.push(this.cf[i].x);
                //   this.cfy.push(parseFloat(this.cf[i].y));
                // }
                //   this.series= [{
                //     name: 'Current Flow',
                //     data: this.cfy,
                //   }];
                this.config={
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
                  series: [{ values: this.cf }] 
                }
                }
                  if(this.mp.lenght != 0){
                    // for(var i=0;i<this.mp.length;i++){
                    //   this.mpx.push(this.mp[i].x);
                    //   this.mpy.push(parseFloat(this.mp[i].y));
                    // }
                    //   this.mpSeries= [{
                    //     name: 'Motor Power',
                    //     data: this.mpy
                    //   }];
                    this.config1={
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
                        series: [{ values: this.mp }] 
                    }
              }
              if(this.op.lenght != 0){
                // for(var i=0;i<this.op.length;i++){
                //   this.opx.push(this.op[i].x);
                //   this.opy.push(parseFloat(this.op[i].y));
                // }
                //   this.opSeries= [{
                //     name: this.ChartValue,
                //     data: this.mpy
                //   }];
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
          },error=>{
            this.loading=false;
            this.addToast("Data Not Found!",'error');
          })
        })

        this.siteAddEdit = this.formBuilder.group({
          Fname: [''],
          Mname: [''],
          lname: [''],
          address: [''],
          pno: [''],
          adno: [''],
          email: [''],
          State: ['',[Validators.required]],
          District: ['',[Validators.required]],
          Srno: [''],
          inl: [''],
          vfd: [''],
          vfdsrno: [''],
          mtype: [''],
          moc: [''],
          mosl: [''],
          puno: [''],
          mhp: [''],
          mhz: [''],
          imeino: [''],
          rmspno: [''],
          device_id: [''],
          conpn:[''],
          nob:[''],
          gp:[''],
          nov:[''],
          sname:[''],
          pop:[''],
          sunq:[''],
        });
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

   filter(data:any){
     this.loading=true;
      
   }

   openModel(){
    this.display= 'block';
     console.log("Getting Data!!");
   }

   get f() { return this.siteAddEdit.controls; }

   onCloseHandled(){
     this.display='none';
   }

   onSubmit(){
     this.loading=true;
    var body3={
      "deviceId":this.device_id.device_id,
      }
this.dbservice.getDeviceDate(body3).subscribe(res=>{
    this.loading=false;
    this.sdata=res;
    this.deviceData=this.sdata.data;
    this.datetime=this.deviceData.date+" "+this.deviceData.time;
    this.nowGenrating=this.deviceData.output_power;
    this.totalGenrating=this.deviceData.total_energy;
    this.flowRate=this.deviceData.current_flow;
    this.totalFlow=this.deviceData.total_flow;
    this.totalonTime=this.deviceData.total_on_time;
    this.dcVoltage=this.deviceData.dv_v;
    this.dcCurrent=this.deviceData.dc_c;
    this.motorPower=this.deviceData.inst_power;
    this.motorCurrent=this.deviceData.motor_c;
    this.motorSpeed=this.deviceData.motor_speed;
    this.motorVoltage=this.deviceData.motor_v;
    this.sitedata=this.deviceData.sitedetails;
    this.gridData=this.deviceData.table_data;
    this.cf=this.deviceData.cf;
    this.mp=this.deviceData.ipss;
    this.op=this.deviceData.outputp;
    if(this.cf.lenght != 0){
      // for(var i=0;i<this.cf.length;i++){
      //   this.cfx.push(this.cf[i].x);
      //   this.cfy.push(parseFloat(this.cf[i].y));
      // }
      //   this.series= [{
      //     name: 'Current Flow',
      //     data: this.cfy
      //   }];
      this.config={
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
          series: [{ values: this.cf }] 
      }
      }
        if(this.mp.lenght != 0){
          // for(var i=0;i<this.mp.length;i++){
          //   this.mpx.push(this.mp[i].x);
          //   this.mpy.push(parseFloat(this.mp[i].y));
          // }
          //   this.mpSeries= [{
          //     name: 'Motor Power',
          //     data: this.mpy
          //   }];
          this.config1={
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
              series: [{ values: this.mp }] 
          }
    }
    if(this.op.lenght != 0){
      // for(var i=0;i<this.op.length;i++){
      //   this.opx.push(this.op[i].x);
      //   this.opy.push(parseFloat(this.op[i].y));
      // }
      //   this.opSeries= [{
      //     name: this.ChartValue,
      //     data: this.mpy
      //   }];
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
        // for(var i=0;i<this.op.length;i++){
        //   this.opx.push(this.op[i].x);
        //   this.opy.push(parseFloat(this.op[i].y));
        // }
        //   this.opSeries= [{
        //     name: this.ChartValue,
        //     data: this.mpy
        //   }];
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
        // for(var i=0;i<this.op.length;i++){
        //   this.opx.push(this.op[i].x);
        //   this.opy.push(parseFloat(this.op[i].y));
        // }
        //   this.opSeries= [{
        //     name: this.ChartValue,
        //     data: this.mpy
        //   }];
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
        // for(var i=0;i<this.op.length;i++){
        //   this.opx.push(this.op[i].x);
        //   this.opy.push(parseFloat(this.op[i].y));
        // }
        //   this.opSeries= [{
        //     name: this.ChartValue,
        //     data: this.mpy
        //   }];
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
      //   for(var i=0;i<this.op.length;i++){
      //     this.opx.push(this.op[i].x);
      //     this.opy.push(parseFloat(this.op[i].y));
      //   }
      //     this.opSeries= [{
      //       name: this.ChartValue,
      //       data: this.mpy
      //     }];
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

  onRegister() {
    this.isSubmitted = true;
    console.log("Getting FormData :-",this.siteAddEdit.value)
    if (this.siteAddEdit.invalid) {
      return;
    }else{
            var body={
                "fname":this.siteAddEdit.value.Fname,
                "mname":this.siteAddEdit.value.Mname,
                "lname":this.siteAddEdit.value.lname,
                "address":this.siteAddEdit.value.address,
                "pno":this.siteAddEdit.value.pno,
                "adno":this.siteAddEdit.value.adno,
                "email":this.siteAddEdit.value.email,
                "state":this.siteAddEdit.value.State,
                "district":this.siteAddEdit.value.District,
                "srno":this.siteAddEdit.value.Srno,
                "inl":this.siteAddEdit.value.inl,
                "vfd":this.siteAddEdit.value.vfd,
                "vfdsrno":this.siteAddEdit.value.vfdsrno,
                "mtype":this.siteAddEdit.value.mtype,
                "moc":this.siteAddEdit.value.moc,
                "mosl":this.siteAddEdit.value.mosl,
                "puno":this.siteAddEdit.value.puno,
                "mhp":this.siteAddEdit.value.mhp,
                "mhz":this.siteAddEdit.value.mhz,
                "imeino":this.siteAddEdit.value.imeino,
                "rmspno":this.siteAddEdit.value.rmspno,
                "device_id":this.siteAddEdit.value.device_id,
                "conpn":this.siteAddEdit.value.conpn,
                "nob":this.siteAddEdit.value.nob,
                "gp":this.siteAddEdit.value.gp,
                "nov":this.siteAddEdit.value.nov,
                "sname":this.siteAddEdit.value.sname,
                "pop":this.siteAddEdit.value.pop,
                "sunq":this.siteAddEdit.value.sunq,
                "user_id":this.uid,
               }
            console.log("Getting Create Customer :-", body);
            // this.listService.createSite(body).subscribe(res=>{
            //  this.rep = res;
            //     this.addToast('New Site Create Successfully','success');
            //       this.onCloseHandled();
            //       this.ngOnInit();
            // },err=>{
            //   this.addToast("New Site Not Added! Please Try Again!!",'error');
            //   this.onCloseHandled();
            //   this.ngOnInit();
            // });
    }
  }

}

