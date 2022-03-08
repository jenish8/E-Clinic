import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


const api = 'http://localhost:3000/details';
const drop = 'http://localhost:3000/clinic_details';

@Injectable({
    providedIn:'root'
})

export class aposervice{

    constructor(private http:HttpClient){}

  
    getUserOrder(id:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/cart_details/order/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    DeleteSite(id:any):Observable<any[]>{
        return this.http.delete<any[]>(`http://localhost:3000/med_order/delete/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    UpdateAdd(body:any):Observable<any[]>{
        return this.http.put<any[]>(`http://localhost:3000/med_order/updateAdd/`+body.id,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    UpdateStatus(body:any):Observable<any[]>{
        return this.http.put<any[]>(`http://localhost:3000/med_order/updateStatus/`+body.id,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
}