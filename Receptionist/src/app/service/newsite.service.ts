import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

const api = 'localhost:3000/details';

@Injectable({
    providedIn:'root'
})

export class newsiteservice{

    constructor(private http:HttpClient){}

    getAllDep():Observable<any[]>{
        return this.http.get<any[]>(api+`/dep`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    createDep(body:any):Observable<any[]>{
        return this.http.post<any[]>(api+`/add-dep`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
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