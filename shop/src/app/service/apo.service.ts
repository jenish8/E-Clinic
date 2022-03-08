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
    Cancel(id:any):Observable<any[]>{
        return this.http.put<any[]>(`http://localhost:3000/appointment_details/cancel/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    getArrive(date:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/appoarrive/`+date,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getAllDep():Observable<any[]>{
        return this.http.get<any[]>(api+`/dep`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    gwtClinic():Observable<any[]>{
        return this.http.get<any[]>(drop+`/clinic`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    getTime(temp:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/aptime_details/get_time/${temp}`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    addAPo(body:any):Observable<any[]>{
        return this.http.post<any[]>(`http://localhost:3000/appointment_details/add_appointment`,body)
        .map(res => res);
    }
    fileUpload(image:any):Observable<any[]>{
        return this.http.post<any[]>(`http://localhost:3000/image/upload`,image,{headers:new HttpHeaders({ 'Content-Type':'multipart/form-data; charset=utf-8' })})
        .map(res => res);
    }
    getUserApo(id:any):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/getuserapo/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    getWatingTime():Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/live/getwtime`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    getAllCount():Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:3000/appointment_details/count`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
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