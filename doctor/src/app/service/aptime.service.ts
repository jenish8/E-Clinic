import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

const api = 'http://localhost:3000/aptime_details';

@Injectable({
    providedIn:'root'
})

export class Timeservice{

    constructor(private http:HttpClient){}

    getAllTime():Observable<any[]>{
        return this.http.get<any[]>(api+`/get_time`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    createTime(body:any):Observable<any[]>{
        return this.http.post<any[]>(api+`/add_time`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getSiteById(id:any):Observable<any[]>{
        return this.http.get<any[]>(api+`/onetime/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
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

}