import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'cf-question',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgForOf,
    StarRatingComponent
  ],
  template: `
    <mat-card>
      <mat-card-title>
        {{ question.title }}
      </mat-card-title>
      <mat-card-subtitle>
        {{ question.subtitle }}
      </mat-card-subtitle>
      <mat-card-content>
        <cf-star-rating [rating]="1" [starCount]="5"></cf-star-rating>
      </mat-card-content>
      <!-- <mat-card-footer>
        <button mat-raised-button type="button" color="primary">
          Submit
        </button>
      </mat-card-footer> -->
    </mat-card>
  `,
  styles: [`
    button {
      margin: 0 5px;
    }
    mat-card {
      max-height: 500px;
      width: 400px;
      margin: 24px 0;
    }
  `]
})
export class QuestionComponent {
  step = {
    cardTitle: 'Card Title',
    cardSubtitle: 'Card Subtitle',
    stepContent: 'Step Content',
  };

  @Input() question: any;
}
