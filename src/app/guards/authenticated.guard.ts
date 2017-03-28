import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthenticatedGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // not logged in so redirect to login page
      this.router.navigate(['/pages']);
      return false;
    }

    return true;
  }

  canActivateChild() {
    if (localStorage.getItem('currentUser')) {
      // not logged in so redirect to login page
      this.router.navigate(['/pages']);
      return false;
    }

    return true;
  }
}
