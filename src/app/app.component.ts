import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';

@Component({
  selector: 'cf-root',
  standalone: true,
  template: `
    <cf-navbar></cf-navbar>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
    <cf-footer></cf-footer>
  `,
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
  ],
  styles: [
    `
    .content {
      align-items: center;
      display: flex;
      height: calc(100vh - 128px);
      justify-content: center;
    }
    `
  ]
})
export class AppComponent {
}
