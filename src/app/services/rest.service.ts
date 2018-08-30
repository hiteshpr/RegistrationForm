import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  base_url = "http://www.flautatechnologies.co.in/tea-app/api/v1/";

  constructor(private http: HttpClient) { }

  registerUser(data): Observable<Object> {

    const url = this.base_url + 'register';

    return this.http.post(url, data);

  }

  loginUser(data): Observable<Object> {

    const url = this.base_url + 'login';

    return this.http.post(url, data);

  }




}

