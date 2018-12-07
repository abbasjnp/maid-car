import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators'
import { Society } from './society.interface';



@Injectable({
    providedIn: 'root'
})

export class AdminService {

    // headers = new HttpHeaders().set("X-CustomHttpHeader", "Bearer JUUAsDO1qrfrmX3BTtND4ddUxaM8Qc");

    // private _url = "./assets/data/society.json";

    private _url = "http://13.233.163.36/authentication/socity/";
    constructor(private http: HttpClient) { }

    getSociety(): Observable<Society[]> {


        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer JUUAsDO1qrfrmX3BTtND4ddUxaM8Qc'
            })
        };
       // let headers = new HttpHeaders().set('Authorization', 'Bearer JUUAsDO1qrfrmX3BTtND4ddUxaM8Qc');
        return this.http.get<Society[]>((this._url),httpOptions)
                            .pipe(map((data: any) => data.data ));
                        
    }
}
