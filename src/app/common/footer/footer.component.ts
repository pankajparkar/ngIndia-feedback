import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cf-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      Test
    </footer>
  `,
  styles: [
    `
    @use '@angular/material' as mat;
    $deep-purple-palette: mat.$deep-purple-palette;

    footer {
      color: red;
      background: mat.get-color-from-palette($deep-purple-palette, 500);
    }
    `
  ]
})
export class FooterComponent {

}
