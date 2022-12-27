import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cf-thanks',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      thanks works!
    </p>
  `,
  styles: [`
    mat-card {
      margin: 24px 0;
    }
  `]
})
export class ThanksComponent {

}
