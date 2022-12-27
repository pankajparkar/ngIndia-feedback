import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from '../question/question.component';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ThanksComponent } from '../thanks/thanks.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cf-feedback',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    QuestionComponent,
    NgSwitchCase,
    NgSwitchDefault,
    NgSwitch,
    WelcomeComponent,
    ThanksComponent,
  ],
  template: `
    <div class="step-container">
      <div class="step-title">
        {{ step.stepTitle }}
      </div>
      <div class="step-subtitle">
        {{ step.stepSubtitle }}
      </div>
      <ng-container *ngSwitch="step.type">
        <ng-container *ngSwitchCase="'welcome'">
          <cf-welcome></cf-welcome>
        </ng-container>
        <ng-container *ngSwitchCase="'welcome'">
          <cf-thanks></cf-thanks>
        </ng-container>
        <ng-container *ngSwitchDefault>
          <cf-question></cf-question>
        </ng-container>
      </ng-container>
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
  steps = [{
    stepTitle: 'Step Title',
    stepSubtitle: 'Step Subtitle',
    cardTitle: 'Card Title',
    cardSubtitle: 'Card Subtitle',
    type: 'start',
    questionId: 1,
  }, {
    stepTitle: 'Step Title',
    stepSubtitle: 'Step Subtitle',
    cardTitle: 'Card Title',
    cardSubtitle: 'Card Subtitle',
    type: 'start',
    questionId: 1,
  }, {
    stepTitle: 'Step Title',
    stepSubtitle: 'Step Subtitle',
    cardTitle: 'Card Title',
    cardSubtitle: 'Card Subtitle',
    type: 'start',
    questionId: 1,
  }];
  route = inject(ActivatedRoute);
  id = +(this.route.snapshot.params['id'] ?? 1);
  isFirstStep = this.id === 1;
  isLastStep = this.id === this.steps.length;
  isQuestion = !this.isFirstStep && !this.isLastStep;
  step = this.steps[this.id];
}
