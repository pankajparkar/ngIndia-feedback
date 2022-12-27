import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'cf-feedback',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    QuestionComponent,
  ],
  template: `
    <div class="step-container">
      <div class="step-title">
        {{ step.stepTitle }}
      </div>
      <div class="step-subtitle">
        {{ step.stepSubtitle }}
      </div>
      <cf-question></cf-question>
    </div>

  `,
  styles: [
    `
    :host {
      display: flex;
      justify-content: center;

      .step-title {
        font-size: 32px;
      }

      .step-subtitle {
        font-size: 16px;
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
  };
}
