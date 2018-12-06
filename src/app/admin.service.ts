import { Injectable} from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';
import{Society} from './society.interface';



@Injectable({
    providedIn:'root'
})

export class AdminService{

     headers = new HttpHeaders().set("X-CustomHttpHeader", "Bearer JUUAsDO1qrfrmX3BTtND4ddUxaM8Qc");
    
   // private _url = "./assets/data/society.json";
   private _url ="http://13.233.163.36/authentication/socity/"
    constructor(private http : HttpClient){}

    getSociety():Observable<Society[]> {
        return this.http.get<Society[]>(this._url)
    }
}
