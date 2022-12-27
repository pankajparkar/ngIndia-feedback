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
    <div class="step-container">
      <div class="step-title">
        {{ step.stepTitle }}
      </div>
      <div class="step-subtitle">
        {{ step.stepSubtitle }}
      </div>
      <mat-card>
        <mat-card-title>
          {{ step.cardTitle }}
        </mat-card-title>
        <mat-card-subtitle>
          {{ step.cardSubtitle }}
        </mat-card-subtitle>
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
    </div>

  `,
  styles: [
    `
    button {
      margin: 0 5px;
    }
    :host {
      display: flex;
      justify-content: center;

      .step-title {
        font-size: 32px;
      }

      .step-subtitle {
        font-size: 16px;
      }

      mat-card {
        height: 500px;
        width: 400px;
      }
    }
    `
  ]
})
export class FeedbackComponent {
  step = {
    stepTitle: 'Step Title',
    stepSubtitle: 'Step Subtitle',
    cardTitle: 'Card Title',
    cardSubtitle: 'Card Subtitle',
    type: 'start',
    questionId: 1,
  }
}
