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

  getDashboard(dateObj){
    // add authorization header with jwt token


    // get users from api
    return this.http.get('http://144.217.165.194:1337/api/dashboard?start_date=' + dateObj.startDate + '&end_date=' + dateObj.endDate)
        .map((response: Response) => response.json());
  }
  getDashpie(dateObj){
    // add authorization header with jwt token


    // get users from api
    return this.http.get('http://144.217.165.194:1337/api/dashboard/other?start_date=' + dateObj.startDate + '&end_date=' + dateObj.endDate)
        .map((response: Response) => response.json());
  }
}
