import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { QuestionComponent } from '../question/question.component';
import { questions } from 'src/app/steps';

@Component({
  selector: 'cf-questions',
  standalone: true,
  imports: [
    NgForOf,
    QuestionComponent,
  ],
  template: `
    <ng-container *ngFor="let question of questions">
      <cf-question [question]="question"></cf-question>
    </ng-container>
  `,
  styles: [
  ]
})
export class QuestionsComponent {
  questions: any[] = questions;
}
