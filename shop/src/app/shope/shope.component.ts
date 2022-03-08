import { Component, OnInit } from '@angular/core';
import { shopeservce } from '../service/shope.service';
import { ToastrService } from 'ngx-toastr';
import { QueryValueType } from '@angular/compiler/src/core';
import { log } from 'console';
@Component({
  selector: 'app-shope',
  templateUrl: './shope.component.html',
  styleUrls: ['./shope.component.css']
})
export class ShopeComponent implements OnInit {
  position = 'top-center';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  confirmClicked = false;
cancelClicked = false;
click:boolean=false;
price:any='';
data:any='';
cart:number=0;

 username : string ='';
 allData: any = [];
  constructor(
    private listService:shopeservce,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('uname'));
    this.username = localStorage.getItem('uname');

    this.listService.getAllProduct().subscribe(res => {
      console.log(res);
      res.forEach((e) => {
        if (e.Photo !== null){
          e.Photo = 'http://localhost:3000/'+e.Photo;
          
        }
        if(e.AvailableQty === "0"){
          e.st = true;
        }
        
        
      })
      this.allData = res;
    });
    this.listService.getCart(this.username).subscribe(res => {
      console.log(res["inf"]);
      res["inf"].forEach((e) => {
       this.cart++;
        
      })
    })

  }

  // searchitem(value :any) {

  //   console.log('Geting Find');
    
  //   //console.log(body["MedicineName"]);
  //   if(value!="")
  //   {
  //   this.listService.getSearchProduct(value).subscribe(res => {
  //     console.log(res);
  //     res["data"].forEach((e) => {
  //       console.log(e);
        
  //       if (e.Photo !== null){
  //         e.Photo = 'http://localhost:3000/'+e.Photo;
  //       }
        
  //     })
  //     console.log(res["data"]);
      
  //     this.allData = res["data"];
 
    
  //   })
  // }
  // else
  // {
  //   this.ngOnInit();
  // }

  // }

  substr(value :any) {

    console.log('Geting Find');
    console.log(value);
    if(value!=''){
      this.listService.getSearchProduct(value).subscribe(res => {
        console.log(res);
        res["data"].forEach((e) => {
          console.log(e);
          
          if (e.Photo !== null){
            e.Photo = 'http://localhost:3000/'+e.Photo;
          }
          
        })
        console.log(res["data"]);
        
        this.allData = res["data"];
      
      })
    }
    //console.log(body["MedicineName"]);
    else{
      this.ngOnInit();
    }

  }

  
  
  onItemSelector(value :any) {
    var body_data={
      "PatientId": this.username,
      "MedicineId": value,
    }
    this.listService.checkCart(body_data).subscribe(res => {
          console.log(res['data']);
          if(res['data']===null)
          {
            this.listService.getPrice(value).subscribe(res => {
              console.log(res["data"]);
              this.data=res["data"];
              this.price=this.data.Price;
              console.log(this.price);
              console.log(value);
              var body = {
                "PatientId": this.username,
                "MedicineId": value,
                "Price":this.price,
              }
              console.log(body);
              this.cart++;
              this.listService.cart(body).subscribe(res => {
                this.toastr.success("Your item is added to cart");
                console.log(res);
              })
            })
          }
          else{
            this.toastr.warning("Your item is already present in cart");
          }
    })
    
     }
   
}
