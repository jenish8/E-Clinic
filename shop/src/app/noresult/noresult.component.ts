import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { registeruser } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noresult',
  templateUrl: './noresult.component.html',
  styleUrls: ['./noresult.component.css']
})
export class NoresultComponent implements OnInit {
  username:string='';
  data:any='';
  opass:string='';
  check:any='';
  constructor(
    private listService:registeruser,
    private router: Router
  ) { }

  ngOnInit(): void {
     this.username = localStorage.getItem('uname');
     
    // this.listService.getSiteById(this.username).subscribe(res=>{
      
    //   this.data = res;
    //  },err=>{
    //  console.log(err);
     
    //  });
  }

  
 Back()
  {
    this.router.navigate(['/shopeing']);
  }
}
