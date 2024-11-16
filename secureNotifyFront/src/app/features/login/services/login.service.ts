import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { LoginResponse } from "../interfaces/loginResponse.interface";
import { LoginRequest } from "../interfaces/loginRequest.interface";

@Injectable({providedIn:'root'})
export class LoginService
{
   private accessToken:string='';
   private refreshToken:string='';
   private user:string='';

   constructor(private http:HttpClient){}

   loginUser(newUserLogin:LoginRequest):Observable<LoginResponse>
   {
      return this.http.post<LoginResponse>(`${environment.apiUrl}/auth/login`,newUserLogin)
   }

   storeLoginData(loginResponse:LoginResponse)
   {
      this.accessToken=loginResponse.accessToken;
      this.refreshToken=loginResponse.refreshToken;
      this.user=loginResponse.user;
   }

   getAccessToken():string
   {
      return this.accessToken;
   }

   getUser():string
   {
      return this.user;
   }

   clearData():void
   {
      this.accessToken='';
      this.refreshToken='';
      this.user='';
   }


}