import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import 'style-loader!./login.scss';
import { AuthenticationService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public error: String = '';
  public progressing: boolean = false;

  constructor(fb: FormBuilder, private router: Router,
              private authenticationService: AuthenticationService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    this.progressing = true;
    if (this.form.valid) {
      this.authenticationService.login(this.email.value, this.password.value)
        .subscribe(result => {
            this.error = '';
            this.router.navigate(['/']);
        }, err => {
          this.error = 'Username or password is incorrect';
        }, () => {
          this.progressing = false;
        });
    }
  }
}
