import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';
import { dateFieldName } from '@progress/kendo-angular-intl';

const api = 'http://localhost:3000/details';

@Injectable({
    providedIn:'root'
})

export class userservice{

    constructor(private http:HttpClient){}

    getAllUser():Observable<any[]>{
        return this.http.get<any[]>(api+`/users`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getToday(date:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/appotoday/`+date,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getAllApo():Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/appointment`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    getAllCount():Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/count`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    createUser(body:any):Observable<any[]>{
        return this.http.post<any[]>(api+`/add-user`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getSiteById(id:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/oneappointment/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    UpdateSite(body:any):Observable<any[]>{
        return this.http.put<any[]>(`http://localhost:3000/appointment_details/update/`+body.id,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }


    Cancel(id:any):Observable<any[]>{
        return this.http.put<any[]>(`http://localhost:3000/appointment_details/cancel/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    DeleteApp(id:any):Observable<any[]>{
        return this.http.delete<any[]>(`http://localhost:3000/appointment_details/delete/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
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