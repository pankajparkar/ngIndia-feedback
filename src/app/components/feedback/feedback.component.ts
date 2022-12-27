import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'cf-feedback',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  template: `
    <mat-card>
      <mat-card-title>
        {{ step.title }}
      </mat-card-title>
      <mat-card-content>
        My Content
      </mat-card-content>
      <mat-card-footer>
        <button mat-raised-button type="button" color="primary">
          Start
        </button>
        <button mat-raised-button type="button" color="primary">
          Prev
        </button>
        <button mat-raised-button type="button" color="primary">
          Next
        </button>
        <button mat-raised-button type="button" color="primary">
          End
        </button>
      </mat-card-footer>
    </mat-card>
  `,
  styles: [
    `
    button {
      margin: 0 5px;
    }
    `
  ]
})
export class FeedbackComponent {
  step = {
    title: 'Step Title',
    type: 'start',
    questionId: 1,
  }
}
