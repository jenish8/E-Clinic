import { Component, OnInit, NgZone } from '@angular/core';
import {ICustomWindow, WindowRefService} from '../window-ref.service';
import { shopeservce } from '../service/shope.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-caer',
  templateUrl: './caer.component.html',
  styleUrls: ['./caer.component.css']
})
export class CaerComponent implements OnInit {

  allData: any = [];
  totalmr: any='';
  tot:any='';
  MedicineId:any='';
  username: string ='';
  penId: string = '';
  private _window: ICustomWindow;
  public rzp: any;
  qtyno:any='1';
  rep:any=[];
  Avail_Qty:any='';

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
        private listService:shopeservce,
        private router: Router,
        private toastr: ToastrService
  ) {
    this._window = this.winRef.nativeWindow;
   }

  ngOnInit(): void {
    this.username = localStorage.getItem('uname');
    this.penId =localStorage.getItem('token');
    this.listService.getCart(this.username).subscribe(res => {
      console.log(res["inf"]);
      res["inf"].forEach((e) => {
       console.log(e.id);
       
        
        if (e.Photo !== null){
          e.Photo = 'http://localhost:3000/'+e.Photo;
        }
        e.qty = 1;
        
      })
      if(res["inf"]!="")
      {
        this.allData = res["inf"];
        this.totalmr = res["sum"];
      }
      else
      {
        this.router.navigate(['/noresult']);
      }
    })
  }
  

  initPay(): void {
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
    
  }
  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
    });
  }
  // onInc(value :any,id: any) {
 
  //   console.log('Geting index:');
  //   console.log(id);
  
  //     var data=Number(value)+1;
  //     console.log(data);
  //     this.qtyno=data; 
    
 
  //   }

  //   numberInput(evt, val) {
  //     console.log(evt, val);
  // }

  //   onDec(value :any) {
   
  //     console.log('Geting Value:');
  //     console.log(value);
  //     if(Number(value)>1)
  //     {
  //       var data=Number(value)-1;
  //       console.log(data);
  //       this.qtyno=data; 
  //     }
  //  }

   remove(id:any){
     console.log(id);
    this.listService.DeleteSite(id).subscribe(res=>{
    //  this.rep = res;
    //  // this.message = this.rep.message;
    //  this.addToast('User Deleted Successfully!!','success');
     this.ngOnInit();
    });
    this.toastr.success("Your item is removed successfully");
    }
  
    inc(i)
    {
        console.log(i);
        this.listService.getQty(i.MedicineId).subscribe(res => {
          console.log(res['data'].AvailableQty);
          this.Avail_Qty=res['data'].AvailableQty;
          if(i.qty<this.Avail_Qty)
          {
              i.qty += 1;
              this.totalmr += Number(i.Price);
              this.tot=Number(i.qty)*Number(i.Price);
              var body = {
                "PatientId": this.username,
                "MedicineId": i.MedicineId,
                "Qty":i.qty,
                "Price":this.tot,
              }
              console.log(body);
              this.listService.cartUpdatePrice(body).subscribe(res => {
              console.log(res);
              })
          }
          else
          {
            this.toastr.warning("No more qty in stock");
          }
        })
    }
    dec(i){
      if (i.qty >1){
        i.qty -= 1;
       
      this.totalmr -= Number(i.Price);
      this.tot=Number(i.qty)*Number(i.Price);
      var body = {
        "PatientId": this.username,
        "MedicineId": i.MedicineId,
        "Qty":i.qty,
        "Price":this.tot,
      }
      console.log(body);
      this.listService.cartUpdatePrice(body).subscribe(res => {
       console.log(res);
       })
      }
      
    }


    //Order place Function
    orderPlace(){
      this.router.navigate(['/address'])
  
    }


}
