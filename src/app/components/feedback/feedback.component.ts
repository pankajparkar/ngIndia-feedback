import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from '../question/question.component';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ThanksComponent } from '../thanks/thanks.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
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
    RouterOutlet,
    WelcomeComponent,
    ThanksComponent,
    NgForOf,
  ],
  template: `
    <div class="step-container">
      <div class="step-title">
        {{ step.stepTitle }}
      </div>
      <div class="step-subtitle">
        {{ step.stepSubtitle }}
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
    :host {
      display: flex;
      justify-content: center;
      padding-bottom: 75px;
    }

    .step-title {
      font-size: 32px;
      line-height: 40px;
    }

    .step-subtitle {
      font-size: 16px;
    }
    `
  ]
})
export class FeedbackComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  steps = steps;
  urlTree = this.router.url.split('/');
  id = this.urlTree[this.urlTree.length - 1];
  step = this.steps[this.id as 'start' | 'thanks' | 'questions'];

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  canExit() {
    return true;
  }
}
