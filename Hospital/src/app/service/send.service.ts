import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


const api = 'http://localhost:3000/email';

@Injectable({
    providedIn:'root'
})

export class userservice{

    constructor(private http:HttpClient){}

    SendMail(body:any):Observable<any[]>{
        return this.http.post<any[]>(api+`/sendemail`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

}