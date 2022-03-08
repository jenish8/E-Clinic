import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

const api = 'http://localhost:3000/med_order';

@Injectable({
    providedIn:'root'
})

export class orderservice{

    constructor(private http:HttpClient){}

    getAllOrder():Observable<any[]>{
        return this.http.get<any[]>(api+`/medorderdetails`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    createUser(body:any):Observable<any[]>{
        return this.http.post<any[]>(api+`/add-user`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getSiteById(id:any):Observable<any[]>{
        return this.http.get<any[]>(api+`/one_medorder/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    UpdateSite(body:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/update/`+body.id,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    DeleteSite(id:any):Observable<any[]>{
        return this.http.delete<any[]>(api+`/delete/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    tempDelUser(id:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/tempdelete/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    RegainUser(id:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/regain/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
}