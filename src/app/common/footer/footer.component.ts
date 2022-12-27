import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'cf-footer',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  template: `
    <footer>
      <mat-toolbar color="primary">
        <mat-toolbar-row>
          <span>Second Line</span>
          <span class="example-spacer"></span>
          <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
            <mat-icon>favorite</mat-icon>
          </button>
          <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
            <mat-icon>share</mat-icon>
          </button>
        </mat-toolbar-row>
      </mat-toolbar>
    </footer>
  `,
  styles: [
    `
    @use '@angular/material' as mat;
    $deep-purple-palette: mat.$deep-purple-palette;

    :host {
      background: mat.get-color-from-palette($deep-purple-palette, 500);
      bottom: 0;
      color: white;
      position: fixed;
      width: 100%;
    }
    `
  ]
})
export class FooterComponent {

}
