import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';

const api = environment.Base_Url + 'user';
// const api = "http://localhost:3000/api/user";

@Injectable({
    providedIn:'root'
})

export class UserService{

    constructor(private http:HttpClient){}

    getUser():Observable<any[]>{
        return this.http.get<any[]>(environment.Base_Url+'usershow/alluser/',{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    createUser(body:any):Observable<any[]>{
        return this.http.post<any[]>(environment.Base_Url+'register/user/',body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    deleteUser(body:any):Observable<any[]>{
        return this.http.post<any[]>(environment.Base_Url+'usershow/deleteuser/',body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
}