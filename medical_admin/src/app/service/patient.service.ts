import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

const api = 'http://localhost:3000/patient_details';

@Injectable({
    providedIn:'root'
})

export class patientservice{

    constructor(private http:HttpClient){}

    getAllPatient():Observable<any[]>{
        return this.http.get<any[]>(api+`/patient`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    createPatient(body:any):Observable<any[]>{
        return this.http.post<any[]>(api+`/add_patient`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getSiteById(id:any):Observable<any[]>{
        return this.http.get<any[]>(api+`/onepatient/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
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

    tempDelPatient(id:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/tempdelete/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    RegainPatient(id:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/regain/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
}