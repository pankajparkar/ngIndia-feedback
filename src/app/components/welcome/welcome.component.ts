import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cf-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      welcome works!
    </p>
  `,
  styles: [`
    mat-card {
      margin: 24px 0;
    }
  `]
})
export class WelcomeComponent {

}
