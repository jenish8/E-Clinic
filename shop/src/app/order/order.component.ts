import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { aposervice } from '../service/order.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  allClinic: any = [];
  time: any = [];
  data: any = [];
  penId: string = '';
  username : string ='';
  constructor(
    private listService:aposervice,
    private router: Router,
    private toastr: ToastrService
  
  ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('uname'));
    this.username = localStorage.getItem('uname');
    this.penId =localStorage.getItem('token');
    this.listService.getUserOrder(this.username).subscribe(res=>{
      console.log('**');
      console.log(res);
      res["inf"].forEach((e) => {
        if (e.MedicineName !== null){
          e.MedicineName = 'http://localhost:3000/'+e.MedicineName;
        }
      });
      console.log('debug order');
      
      console.log(res);
      this.data = res["inf"];
      
     },err=>{
     console.log(err);
     
     });
    }  
    cancel(value:any,status:any)
    {
      console.log(value);
      var body = {
        "id":value,
        "OrderStatus":"Cancelled"
      }
      this.listService.UpdateStatus(body).subscribe(res=>{
        if(status=='Pending')
        {
          this.toastr.success("Your order is cancelled");
        }
        else{
          this.toastr.warning("Your order cannot be cancelled now");
        }
          console.log(res);
      })
      this.ngOnInit();
    }
    change(value:any)
    {
      localStorage.setItem('orderid', value);
      //this.toastr.success("Your order is cancelled");
      this.router.navigate(['/newadd']);
    }
}
