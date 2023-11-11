import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  submitted = false;
  loading = false;
  authError;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService,
              private snackBar: MatSnackBar,
              private router: Router) {
    this.form = fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.get('login').invalid) {
      this.authError = 'Введите логин';
      return;
    }
    if (this.form.get('password').invalid) {
      this.authError = 'Введите пароль';
      return;
    }
    this.submitted = true;
    this.loading = true;
    this.authError = '';

    const token = this.authService.encodeToBase64(this.form.get('login').value, this.form.get('password').value);
    console.log(token);
    this.tokenService.setToken(token);
    // this.authService.login(this.form.getRawValue()).pipe(
    //   finalize(() => this.loading = false)
    // ).subscribe((res: any) => {
    //
    // }, (err) => {
    //   this.authError = err && err.error && err.error.message ? err.error.message : "Неверные логин и пароль";
    // });

    this.router.navigateByUrl('/admin');
  }
}
