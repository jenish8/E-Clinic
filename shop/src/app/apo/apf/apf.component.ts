import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { aposervice } from '../../service/apo.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-apf',
  templateUrl: './apf.component.html',
  styleUrls: ['./apf.component.css']
})
export class ApfComponent implements OnInit {
  penId: string = '';
  username : string ='';
  allClinic: any = [];
  time: any = [];
  imagePath: string = '';
  datee:any='';
  bt1=true;
  UserAddEdit: FormGroup;
  importUser:FormGroup;
  isSubmitted = false;
  constructor(
    private listService:aposervice,
    private router: Router,
    private http: HttpClient,
    public datepipe: DatePipe,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('uname');
    this.penId =localStorage.getItem('token');
    this.listService.gwtClinic().subscribe(res=>{
      console.log(res);
      res.forEach((ele) => {
        
        this.allClinic.push(ele.ClinicName)
        console.log(this.allClinic);
      })

   
      
      
     },err=>{
     console.log(err);
     
     });

     this.isSubmitted = false;
    this.UserAddEdit = this.formBuilder.group({
      aname: ['',[Validators.required]],
      time: ['',[Validators.required]],
      date: ['',[Validators.required]],
     });
    
     this.importUser = this.formBuilder.group({
         file:['',[Validators.required]]
     });
 
  }

  get f() { return this.UserAddEdit.controls; }

  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      
      let formData = new FormData()
      const image = event.target.files[0];
      console.log(image);
      formData.append('image', image)
      console.log(formData);
      this.http.post<any>('http://localhost:3000/image/upload', formData).subscribe(
      (res) => this.imagePath = res.file_path,
      (err) => console.log(err)
    );
  
      
     
    
    }
  }

//   onDate(){
//     this.bt1=true;
//     let temp2 =new Date();
//  let latest_date =this.datepipe.transform(temp2, 'yyyy-MM-dd');
//  console.log('--------------');
//  console.log(latest_date);
// if(latest_date === this.datee){
//   this.bt1=true;
//   console.log('call if');
//   console.log(this.datee);
    
//    var time = new Date();
//    var time_store;
//    time_store = time.toLocaleString('en-IN', {hour: 'numeric', hour12:true})
//    time_store = time_store.split(" ")
//    console.log(time_store[0]);
//    let temp;
//    temp = time_store[0];
//    temp = `${temp}:00-${temp}:15`
//    console.log(temp);
   
   
// this.time = [];
//    this.http.get<any>('http://localhost:3000/aptime_details/stime/'+this.datee).subscribe(
//      (res => {
       
       
//        if(res.length !== 0){
        
//         this.time = res;
//        }
//        else{
//          console.log('else pat');
         
//         this.listService.getTime(temp).subscribe(res=>{
//           console.log('**');
          
//           console.log(res);
          
          
//           res.forEach((ele) => {
            
//             this.time.push(ele.timeSlot)
//             console.log(this.time);
//           })
    
       
          
          
//          },err=>{
//          console.log(err);
         
//          });
//        }
    
       
//      })
     
//     )
  
// }else if (latest_date <= this.datee){
//   this.bt1=true;
//   this.time = [];
  //  this.http.get<any>('http://localhost:3000/aptime_details/stime/'+this.datee).subscribe(
  //    (res => {
       
       
  //      if(res.length !== 0){

  //       this.time = res;
  //      }
  //      else{
  //        console.log('else pat');
  //        this.http.get<any>('http://localhost:3000/aptime_details/alltime').subscribe(res=>{
  //         console.log('**');
          
  //         console.log(res);
  //         res.forEach((ele) => {
            
  //           this.time.push(ele.timeSlot)
  //           console.log(this.time);
  //         })
      
       
          
          
  //        },err=>{
  //        console.log(err);
         
  //        });
      
  //      }
    
       
  //    })
     
  //   )
  

  
// }else{
//   console.log('else if');
//   this.toastr.warning('Invalid date');
//   this.bt1=false;
// }
 
    
    
//   }

onDate()
{
  this.bt1=true;
  let temp =new Date();
  let today_date =this.datepipe.transform(temp, 'yyyy-MM-dd');
  console.log('Todays Date');
  console.log(today_date);
  console.log('Selected Date');
  console.log(this.datee);
  if(today_date<=this.datee)
  {
    if(today_date==this.datee)
    {
        this.bt1=true;
        var time = new Date();
        var time_store;
        time_store = time.toLocaleString('en-IN', {hour: 'numeric', hour12:false})
        time_store = time_store.split(" ")
        let current_time;
        current_time = time_store[0];
        let current_time1=Number(current_time)+1;
        current_time = `${current_time}:45-${current_time1}:00`;
        console.log(current_time);
        this.time = [];
        this.http.get<any>('http://localhost:3000/aptime_details/stime1/'+this.datee+'/'+current_time).subscribe(res => {
           console.log(res);
           const uniq = res.filter((n,i)=> res.indexOf(n)===i);
           console.log('unique array')
           console.log(uniq);
           if(res.length!=0)
           {
              this.time=uniq;
              console.log('check');
           }
           else
           {
            this.toastr.warning('No time available');
            this.bt1=false;
           }
        })
      }
      else
      {
        this.bt1=true;
        this.http.get<any>('http://localhost:3000/aptime_details/stime/'+this.datee).subscribe(res => {
          const uniq = res.filter((n,i)=> res.indexOf(n)===i);
            if(res.length != 0){
     
             this.time = uniq;
            }
            else
            {
              this.http.get<any>('http://localhost:3000/aptime_details/alltime').subscribe(res=>{
               console.log(res);
               res.forEach((ele) => {
                 this.time.push(ele.timeSlot)
                 console.log(this.time);
               })
              },err=>{
              console.log(err);
              });
            }
          })
      }
  }
  else
  {
    this.toastr.warning('Invalid date');
    this.bt1=false;
  }
}

  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    const username=form.value.uname;
    if (this.UserAddEdit.invalid) {
      return;
     }else{
      const cname = form.value.v;
      const aname = form.value.aname;
      const date = form.value.date;
      const time = form.value.time;
      const pId = this.username;
      var pec = this.imagePath;
      if(pec == '')
      {
        pec='empty';
      }
   
      var body = {
        "AppointmentDate": date,
        "AppointmentTime": time,
        "UserIdGiven":cname,
        "PatientId": pId,
        "Status": "on hold",
        "AppointmentTakenDate":aname,
        "Prescription": pec
      }
      this.listService.addAPo(body).subscribe(res=>{
        console.log(res);
        this.router.navigate(['/appoiment']);
        
       },err=>{
       console.log(err);
       
       });
      
      form.reset();
     }
   
  }

}

