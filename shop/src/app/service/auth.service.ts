import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


const api = 'http://localhost:3000/auth';

@Injectable({
    providedIn:'root'
})

export class authservice{

    constructor(private http:HttpClient){}

    getAllDep():Observable<any[]>{
        return this.http.get<any[]>(api+`/dep`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    logUser(body:any):Observable<any[]>{
        return this.http.post<any[]>(api+`/login`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getSiteById(id:any):Observable<any[]>{
        return this.http.get<any[]>(api+`/dep-one/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    UpdateSite(body:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/dep-update/`+body.id,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    DeleteSite(id:any):Observable<any[]>{
        return this.http.delete<any[]>(api+`/dep-delete/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

}