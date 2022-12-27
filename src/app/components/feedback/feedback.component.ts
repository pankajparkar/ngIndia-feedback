import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from '../question/question.component';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ThanksComponent } from '../thanks/thanks.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { steps } from 'src/app/steps';

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
    NgIf,
    RouterLink,
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
      <ng-container [ngSwitch]="id">
        <ng-container *ngSwitchCase="1">
          <cf-welcome></cf-welcome>
        </ng-container>
        <ng-container *ngSwitchCase="steps.length">
          <cf-thanks></cf-thanks>
        </ng-container>
        <ng-container *ngSwitchDefault>
          <cf-question></cf-question>
        </ng-container>
      </ng-container>
      <div class="step-footer">
        <button mat-raised-button type="button" color="primary" *ngIf="!isFirstStep" [routerLink]="['/feedback', id - 1]">
          Prev
        </button>
        <button mat-raised-button type="button" color="primary" *ngIf="!isLastStep" [routerLink]="['/feedback', id + 1]">
          Next
        </button>
      </div>
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
  steps = steps;
  route = inject(ActivatedRoute);
  id = +(this.route.snapshot.params['id'] ?? 1);
  isFirstStep = this.id === 1;
  isLastStep = this.id === this.steps.length;
  isQuestion = !this.isFirstStep && !this.isLastStep;
  step = this.steps[this.id - 1];

  router = inject(Router);

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
