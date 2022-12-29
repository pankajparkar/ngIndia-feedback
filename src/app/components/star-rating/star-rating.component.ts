import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}

@Component({
  selector: 'cf-star-rating',
  standalone: true,
  imports: [
    MatSnackBarModule,
    MatIconModule,
    NgForOf,
    MatButtonModule,
    MatFormFieldModule,
    MatTooltipModule,
    NgIf,
  ],
  template: `
    <ng-container *ngFor="let ratingId of ratingArr; index as i">
      <button mat-icon-button [color]="color" [id]="'star_'+i" (click)="ratingUpdated.emit(i+1)" [matTooltip]="ratingId+1+''" matTooltipPosition="above">
        <mat-icon>
          {{showIcon(i)}}
        </mat-icon>
      </button>
    </ng-container>
    <!-- <mat-error *ngIf="!starCount">
      Star count is <strong>required</strong> and cannot be zero
    </mat-error> -->
    <p class="body-2">
        Your rated
        <span class="body-2">{{rating}}</span> /
        <span class="body-2">{{starCount}}</span>
    </p>
  `,
  styles: [
  ]
})
export class StarRatingComponent {

  @Input() rating: number = 3;
  @Input() get starCount() {
    return this._starCount;
  }
  set starCount(value: number) {
    this._starCount = value ?? 5;
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  @Input() color: string = 'accent';
  @Output() ratingUpdated = new EventEmitter();

  snackBar = inject(MatSnackBar);
  ratingArr: number[] = [];
  private _starCount: number = 5;

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}