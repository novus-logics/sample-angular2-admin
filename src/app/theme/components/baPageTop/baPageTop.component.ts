import {Component} from '@angular/core';
import {AuthenticationService} from '../../../services/auth.service';
import {GlobalState} from '../../../global.state';

import 'style-loader!./baPageTop.scss';
import {Router} from "@angular/router";

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
})
export class BaPageTop {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState, private authService: AuthenticationService, private router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public signout() {
    if (this.authService.logout()) {
      this.router.navigate(['/login']);
    }
  }
}
