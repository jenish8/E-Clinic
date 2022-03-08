import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


const api = 'http://localhost:3000/details';

@Injectable({
    providedIn:'root'
})

export class registeruser{

    constructor(private http:HttpClient){}

    getAllDep():Observable<any[]>{
        return this.http.get<any[]>(api+`/dep`,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    createDep(body:any):Observable<any[]>{
        return this.http.post<any[]>(api+`/add-user`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getSiteById(id:any):Observable<any[]>{
        return this.http.get<any[]>(api+`/oneuser/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    UpdateSite(body:any):Observable<any[]>{
        return this.http.put<any[]>(api+`/updateuser/`+body.uname,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    UpdatePass(body:any):Observable<any[]>{
        return this.http.put<any[]>(`http://localhost:3000/forgotpassword/`+body.uname,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    DeleteSite(id:any):Observable<any[]>{
        return this.http.delete<any[]>(api+`/dep-delete/`+id,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    getPassword(uname:any):Observable<any[]>{
        return this.http.get<any[]>(api+`/getpass/`+uname,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    checkPassword(body:any):Observable<any[]>{
        return this.http.post<any[]>(api+`/checkp`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
    checkUName(body:any):Observable<any[]>{
        return this.http.post<any[]>(`http://localhost:3000/forgotpassword/username`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }

    forgotPasswordChange(body:any):Observable<any[]>{
        return this.http.post<any[]>(`http://localhost:3000/forgotpassword/updatepass`,body,{headers:new HttpHeaders({'Content-Type':'application/json'})})
        .map(res => res);
    }
}