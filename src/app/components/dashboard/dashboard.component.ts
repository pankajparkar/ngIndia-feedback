import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'cf-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
  ],
  template: `
    <mat-card *ngFor="let stat of stats">
      <mat-card-title>
        {{ stat.title }}
      </mat-card-title>
    </mat-card>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-flow: row wrap;
      mat-card {
        margin: 16px;
        width: 200px;
      }
    }
    `
  ]
})
export class DashboardComponent {
  stats: any[] = [
    { title: 'Overall' },
    { title: 'Talk 1' },
    { title: 'Talk 2' },
    { title: 'Talk 3' },
    { title: 'Talk 4' },
    { title: 'Talk 5' },
    { title: 'Talk 6' },
  ];
}