import { Component, OnInit, NgZone } from '@angular/core';
import {ICustomWindow, WindowRefService} from '../window-ref.service';
import { aposervice } from '../service/order.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-newadd',
  templateUrl: './newadd.component.html',
  styleUrls: ['./newadd.component.css']
})
export class NewaddComponent implements OnInit {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  Delivery_Address:string='';
  username:string='';
  orderid:string='';
  UserAddEdit: FormGroup;
  importUser:FormGroup;
  isSubmitted = false;
  constructor(
    private listService:aposervice,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('uname');
    this.orderid = localStorage.getItem('orderid');
    
    this.isSubmitted = false;
    this.UserAddEdit = this.formBuilder.group({
      name: ['',[Validators.required]],
      cno: ['',[Validators.required]],
      hno: ['',[Validators.required]],
      lmark: ['',[Validators.required]],
      city: ['',[Validators.required]],
      pin: ['',[Validators.required]],
     });
    
     this.importUser = this.formBuilder.group({
         file:['',[Validators.required]]
     });
  }

  get f() { return this.UserAddEdit.controls; }
  
  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    const username=form.value.uname;
    if (this.UserAddEdit.invalid) {
      return;
     }else{
      const name = form.value.name;
      const cno = form.value.cno;
      const hno = form.value.hno;
      const lmark = form.value.lmark;
      const city = form.value.city;
      const pin = form.value.pin;
  
      this.Delivery_Address=name+"\n"+cno+"\n"+hno+" "+lmark+" "+city+" "+pin;
     // console.log(this.Delivery_Address);
      localStorage.setItem('Address', this.Delivery_Address);
      var body = {
        "id":this.orderid,
        "Delivery_Address":this.Delivery_Address
      }
      this.listService.UpdateAdd(body).subscribe(res=>{
          console.log(res);
      })
      this.toastr.success("Your address is changed successfully");
      this.router.navigate(['/yourorder']);
      form.reset();
     }
    
  }
  
  
  
}
