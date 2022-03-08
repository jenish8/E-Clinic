import { Component, OnInit, NgZone } from '@angular/core';
import {ICustomWindow, WindowRefService} from '../window-ref.service';
import { shopeservce } from '../service/shope.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-por',
  templateUrl: './por.component.html',
  styleUrls: ['./por.component.css']
})
export class PorComponent implements OnInit {
username: string = '';
penId: string = '';
data:any='';
MedicineId:string='';
Qty:string='';
Price:string='';
Total=0;
Address:any='';
PaymentMode:string='';
private _window: ICustomWindow;
  public rzp: any;
  public options: any = {
    key: 'rzp_test_hGRPFSnEuFa824', // add razorpay key here
    name: 'The Swag Coder',
    description: 'Shopping',
    amount: 100, // razorpay takes amount in paisa
    prefill: {
      name: 'The Swag Coder',
      email: 'patelkathan1996@gmail.com', // add your email id
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          // add current page routing if payment fails
        })
      })
    }
  };

  constructor(
    private zone: NgZone,
    private winRef: WindowRefService,
    private router: Router,
    private listService:shopeservce,
    private toastr: ToastrService
  ) {
    this._window = this.winRef.nativeWindow;
   }

  ngOnInit(): void {
    this.username = localStorage.getItem('uname');
    this.penId =localStorage.getItem('token');
    this.Address = localStorage.getItem('Address');
  }
  initPay(): void {

    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
    this.PaymentMode="online"
    console.log('click');
    this.username = localStorage.getItem('uname');
    this.listService.getCart(this.username).subscribe(res => {
      console.log(res["inf"]);
     res["inf"].forEach((e) => {
       this.MedicineId = e.MedicineId;
       this.Qty = e.Qty;
       this.Price = e.Price;
       console.log(this.MedicineId,this.Qty,this.Price);
       this.Total=Number(this.Qty)*Number(this.Price);
       console.log(this.Total);
       var body = {
         "PatientId": this.username,
         "MedicineId": this.MedicineId,
         "Qty":this.Qty,
         "Price":this.Price,
         "Total":this.Total,
         "Delivery_Address":this.Address,
         "PaymentMode":this.PaymentMode
       }
       this.listService.order(body).subscribe(res => {
         console.log(res);
       })
      })
    })
    this.listService.placeOrder(this.username).subscribe(res => {
      console.log(res);
    })
    this.listService.cartUpdate(this.username).subscribe(res => {
     console.log(res);
     this.toastr.success("Your order has been placed");
     this.router.navigate(['/yourorder']);
    })
  }
  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
    });
  }



  offline(): void {
    this.PaymentMode="offline"
   console.log('click');
   this.username = localStorage.getItem('uname');
   this.listService.getCart(this.username).subscribe(res => {
     console.log(res["inf"]);
    res["inf"].forEach((e) => {
      this.MedicineId = e.MedicineId;
      this.Qty = e.Qty;
      this.Price = e.Price;
      console.log(this.MedicineId,this.Qty,this.Price);
      this.Total=Number(this.Qty)*Number(this.Price);
      var body = {
        "PatientId": this.username,
        "MedicineId": this.MedicineId,
        "Qty":this.Qty,
        "Price":this.Price,
        "Total":this.Total,
        "Delivery_Address":this.Address,
        "PaymentMode":this.PaymentMode
      }
      this.listService.order(body).subscribe(res => {
        console.log(res);
      })
     })
   })
   this.listService.placeOrder(this.username).subscribe(res => {
    console.log(res);
  
    
  })
   this.listService.cartUpdate(this.username).subscribe(res => {
    console.log(res);
    this.toastr.success("Your order has been placed");
    this.router.navigate(['/yourorder']);
   })
   
   
  }

}
