import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'cf-question',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  template: `
    <mat-card>
      <mat-card-title>
        {{ step.cardTitle }}
      </mat-card-title>
      <mat-card-subtitle>
        {{ step.cardSubtitle }}
      </mat-card-subtitle>
      <mat-card-content>
        {{step.stepContent}}
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
  styles: [`
    button {
      margin: 0 5px;
    }
    mat-card {
      height: 500px;
      width: 400px;
    }
  `]
})
export class QuestionComponent {
  step = {
    cardTitle: 'Card Title',
    cardSubtitle: 'Card Subtitle',
    stepContent: 'Step Content',
  };
}
