import { Component, inject, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cf-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
  ],
  template: `
    <mat-card class="login-card">
      <mat-card-title>
        Login Form
      </mat-card-title>
      <form name="loginForm" (ngSubmit)="login()">
        <mat-form-field appearance="fill">
          <mat-label>Username</mat-label>
          <input matInput type="text" name="username" [(ngModel)]="user.name" required>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Password</mat-label>
          <input matInput type="password" [(ngModel)]="user.password" required>
        </mat-form-field>

        <button type="submit" mat-raised-button color="primary">
          Submit
        </button>
      </form>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: flex;
        padding: 16px;
        justify-content: center;
        align-items: center;

        .login-card {
          padding: 16px;
        }

        form {
          display: flex;
          flex-flow: column nowrap;
          width: 400px;
        }
      }
    `
  ]
})
export class LoginComponent {
  user = { name: '', password: '', };
  router = inject(Router);
  @ViewChild(NgForm) loginForm!: NgForm;

  login() {
    if (this.loginForm.invalid) return;
    this.router.navigateByUrl('/dashboard');
  }
}
