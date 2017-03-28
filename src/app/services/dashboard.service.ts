import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './auth.service';
import { User } from '../models/user.model';

@Injectable()
export class DashboardService {
  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  getDashboard(){
    // add authorization header with jwt token


    // get users from api
    return this.http.get('http://192.168.0.10:1337/api/dashboard')
      .map((response: Response) => response.json());
  }
  getDashpie(){
    // add authorization header with jwt token


    // get users from api
    return this.http.get('http://192.168.0.10:1337/api/dashboard/other')
      .map((response: Response) => response.json());
  }
}
