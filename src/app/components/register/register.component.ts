import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  submitted = false;
  loading = false;
  authError;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService,
              private snackBar: MatSnackBar) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.get('email').invalid) {
      this.authError = 'Введите e-mail';
      return;
    }
    if (this.form.get('password').invalid) {
      this.authError = 'Введите пароль';
      return;
    }
    this.submitted = true;
    this.loading = true;
    this.authError = '';
    this.authService.register(this.form.getRawValue()).pipe(
      finalize(() => this.loading = false)
    ).subscribe((res: any) => {

    }, (err) => {
      this.authError = err && err.error && err.error.message ? err.error.message : "Неверные email или пароль";
    });
  }
}
