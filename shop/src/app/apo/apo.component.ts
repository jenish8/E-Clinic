import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { aposervice } from '../service/apo.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { DatePipe } from '@angular/common';;
@Component({
  selector: 'app-apo',
  templateUrl: './apo.component.html',
  styleUrls: ['./apo.component.css']
})
export class ApoComponent implements OnInit {
  allClinic: any = [];
  time: any = [];
  data: any = [];
  penId: string = '';
  username : string ='';
  watingTime: string='';
  queue: number = 0;
  constructor(
    private listService:aposervice,
    private toastr: ToastrService,
    public datepipe: DatePipe,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('uname'));
    this.username = localStorage.getItem('uname');
    this.penId =localStorage.getItem('token');
    this.listService.getUserApo(this.username).subscribe(res=>{
      console.log('**');
      console.log(res);
      
      res.forEach((e) => {
        console.log(e.Prescription)
        if(e.Prescription == 'empty')
        {
          e.st=true;
        }
        else{
          e.Prescription = 'http://localhost:3000/'+e.Prescription;
        }
      })
      
      
      this.data = res;
      
      
      
     },err=>{
     console.log(err);
     
     });
      
   
     let temp2 =new Date();
      //let latest_date =this.datepipe.transform(temp2, 'yyyy-MM-dd');
     let latest_date="2021-05-15" ;
        this.listService.getArrive(latest_date).subscribe(res =>{
          this.queue=res.length;
          this.watingTime=(this.queue*15).toString();
          this.watingTime+=" mins";
        });

    this.listService.gwtClinic().subscribe(res=>{
      console.log(res);
      res.forEach((ele) => {
        
        this.allClinic.push(ele.ClinicName)
        console.log(this.allClinic);
      })

   
      
      
     },err=>{
     console.log(err);
     
     });
  
  }
  cancel(id:any,Status:any)
    {
      this.listService.Cancel(id).subscribe(res =>{
        console.log(res);
        if(Status=='on hold')
        {
          this.toastr.success("Your appointment is cancelled");
        }
        else
        {
          this.toastr.warning("Your appointment cannot be cancelled now");
        }
        this.ngOnInit();
      })
    }

  onSubmit(form: NgForm) {
    const cname = form.value.v;
    const aname = form.value.aname;
    const date = form.value.date;
    const time = form.value.time;
    const pId = this.penId;
 
    var body = {
      "AppointmentDate": date,
      "AppointmentTime": time,
      "UserIdGiven":cname,
      "PatientId": pId,
      "Status": "on hold",
      "AppointmentTakenDate":aname
    }
    this.listService.addAPo(body).subscribe(res=>{
      console.log(res);
      
     },err=>{
     console.log(err);
     
     });
    
    
  }

}
