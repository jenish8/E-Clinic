import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

const api = 'http://localhost:3000/brand_details';

@Injectable({
    providedIn:'root'
})

export class brandservice{

    constructor(private http:HttpClient){}

    getAllBrand():Observable<any[]>{
        return this.http.get<any[]>(api+`/brand`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    createBrand(body:any):Observable<any[]>{
        return this.http.post<any[]>(api+`/add_brand`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getSiteById(id:any):Observable<any[]>{
        return this.http.get<any[]>(api+`/onebrand/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
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

    tempDelBrand(id:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/tempdelete/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    RegainBrand(id:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/regain/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
}