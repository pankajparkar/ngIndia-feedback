import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cf-thanks',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>🙏</p>
  `,
  styles: [`
    p {
      font-size: 128px;
      line-height: 150px;
      text-align: center;
    }
  `]
})
export class ThanksComponent {

}
