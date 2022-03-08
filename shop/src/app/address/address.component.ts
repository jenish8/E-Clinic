import { Component, OnInit, NgZone } from '@angular/core';
import {ICustomWindow, WindowRefService} from '../window-ref.service';
import { shopeservce } from '../service/shope.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  Delivery_Address:string='';
  address:string='';
  username:string='';
  UserAddEdit: FormGroup;
  importUser:FormGroup;
  isSubmitted = false;
  constructor(
    private listService:shopeservce,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('uname');
    this.listService.getAdd(this.username).subscribe(res=>{
      console.log('address')
      console.log(res);
      this.address=res['data'].address;
      console.log(this.address);
    })
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

  oldadd()
  {
    this.Delivery_Address=this.address;
    localStorage.setItem('Address', this.Delivery_Address);
    this.router.navigate(['/order']);
  }
  
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
      this.toastr.success("Your address is saved");
      this.router.navigate(['/order']);
      form.reset();
     }
    
  }
  
  
}
