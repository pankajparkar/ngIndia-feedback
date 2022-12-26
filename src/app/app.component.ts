import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';

@Component({
  selector: 'cf-root',
  standalone: true,
  template: `
    <cf-navbar></cf-navbar>
    <router-outlet></router-outlet>
    <cf-footer></cf-footer>
  `,
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent
  ],
})
export class AppComponent {
}
