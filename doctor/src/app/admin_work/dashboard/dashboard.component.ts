import {Component, OnInit, ViewEncapsulation , ViewChild} from '@angular/core';
import { dashboardService } from '../../service/dashboard.service';
import { DatePipe } from '@angular/common';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit {

  //for toast show
  position = 'top-center';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  
  totalC:string = '';
  totalA:string = '';
  totalO: string = '';

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
  display:any='none';
  did:any;
  total_sites:any;
  online:any;
  alert:any;
  statusData:any;
  config:zingchart.graphset = {};
  config1:zingchart.graphset = {};
  config2:zingchart.graphset = {};

  constructor(
          private datepipe:DatePipe,
          private toastyService: ToastyService,
          private dbservice:dashboardService) {}

  ngOnInit() {
    this.crossingValues= [0, 1000];
    this.date = new Date();
    this.currentDate = this.datepipe.transform(this.date,'yyyy-MM-dd');
    this.userid = localStorage.getItem("user_id");
    var body={
      "userId":this.userid
    }
    this.dbservice.getAllCount(this.currentDate).subscribe(res=>{
      console.log(res);
  this.totalA=res["offline"];
  this.totalO = res["online"];
     
    });
   }


}
