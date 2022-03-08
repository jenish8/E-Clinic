import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


const api = 'http://localhost:3000/details';

@Injectable({
    providedIn:'root'
})

export class shopeservce{

    constructor(private http:HttpClient){}

    getAllProduct():Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/medicine_details/medicine`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getSearchProduct(MedicineName:any):Observable<any[]>{
        console.log('***');
        
        console.log(MedicineName);
        
        return this.http.get<any[]>(`http://localhost:3000/medicine_details/submedicinename/`+MedicineName,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    getQty(MedicineId:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/medicine_details/med_qty/`+MedicineId,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getPrice(id:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/medicine_details/onemedicine/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    createDep(body:any):Observable<any[]>{
        return this.http.post<any[]>(api+`/add-user`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    order(body:any):Observable<any[]>{
        return this.http.post<any[]>(`http://localhost:3000/med_order/add_medorder`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    cart(body:any):Observable<any[]>{
        return this.http.post<any[]>(`http://localhost:3000/cart_details/add_cart`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    cartUpdate(id:any):Observable<any[]>{
        return this.http.post<any[]>(`http://localhost:3000/cart_details/us/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    cartUpdatePrice(body:any):Observable<any[]>{
        return this.http.put<any[]>(`http://localhost:3000/cart_details/updatePrice/`+body.PatientId,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    placeOrder(body:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/st/ms/`+body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    checkCart(body:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/cart_details/checkcart/`+body.PatientId+`/`+body.MedicineId,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    getSiteById(id:any):Observable<any[]>{
        return this.http.get<any[]>(api+`/dep-one/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    getCart(id:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/cart_details/total/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    UpdateSite(body:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/dep-update/`+body.id,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    getAdd(uname:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/details/address/`+uname,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    DeleteSite(id:any):Observable<any[]>{
        return this.http.delete<any[]>(`http://localhost:3000/cart_details/delete/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

}