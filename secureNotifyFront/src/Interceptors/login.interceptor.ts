
import { HttpEvent, HttpHandler, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from '@angular/core';
import { Observable } from "rxjs";
import { LoginService} from "../app/features/login/services/login.service";



export function loginInterceptor(req:HttpRequest<unknown>, next:HttpHandlerFn):Observable<HttpEvent<unknown>>
{
     const loginService = inject(LoginService);

    const accessToken = loginService.getAccessToken();

   req=req.clone({
    setHeaders :{
        'content-type' : 'application/json; charset=utf-8',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${accessToken}`
    }
   });

   return next(req)
}
// }