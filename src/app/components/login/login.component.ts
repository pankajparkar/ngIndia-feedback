import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'cf-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
  ],
  template: `
    <mat-card class="login-card">
      <mat-card-title>
        Login Form
      </mat-card-title>
      <form>
        <mat-form-field appearance="fill">
          <mat-label>Input</mat-label>
          <input matInput>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Select</mat-label>
          <mat-select>
            <mat-option value="one">First option</mat-option>
            <mat-option value="two">Second option</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Textarea</mat-label>
          <textarea matInput></textarea>
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

}
