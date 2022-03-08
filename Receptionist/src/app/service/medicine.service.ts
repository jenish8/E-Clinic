import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

const api = 'http://localhost:3000/appointment_details';

@Injectable({
    providedIn:'root'
})

export class medicineservice{

    constructor(private http:HttpClient){}
    Arrive(id:any):Observable<any[]>{
        return this.http.put<any[]>(`http://localhost:3000/appointment_details/arrive/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    Complete(id:any):Observable<any[]>{
        return this.http.put<any[]>(`http://localhost:3000/appointment_details/complete/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getToday(date:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/appotoday/`+date,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getOnHold(date:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/appohold/`+date,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getArrive(date:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/appoarrive/`+date,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getComplete(date:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/appocomplete/`+date,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getAllApo():Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/appointment`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getAllMedicine():Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/live/getwtime`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    getAllCount():Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/count`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    createMedicine(body:any):Observable<any[]>{
        return this.http.post<any[]>(`http://localhost:3000/live/time`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getSiteById(id:any):Observable<any[]>{
        return this.http.get<any[]>(api+`/onemedicine/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
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

    tempDelMedicine(id:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/tempdelete/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    RegainMedicine(id:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/regain/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
}