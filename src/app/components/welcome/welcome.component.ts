import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cf-welcome',
  standalone: true,
  imports: [
    MatInputModule,
    NgIf,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
  ],
  template: `
    <mat-card>
      <mat-form-field class="example-full-width">
        <mat-label>What is your name?</mat-label>
        <input type="email" matInput placeholder="Ex. John Doe">
        <mat-hint>Errors appear instantly!</mat-hint>
        <mat-error >
          Please enter a valid email address
        </mat-error>
        <mat-error>
          Email is <strong>required</strong>
        </mat-error>
      </mat-form-field>
      <button mat-raised-button routerLink="../questions">
        Next
      </button>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 24px 0;
    }
  `]
})
export class WelcomeComponent {

}
