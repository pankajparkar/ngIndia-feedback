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
    <button mat-icon-button [color]="color" *ngFor="let ratingId of ratingArr;index as i" [id]="'star_'+i" (click)="onClick(i+1)" [matTooltip]="ratingId+1+''" matTooltipPosition="above">
      <mat-icon>
        {{showIcon(i)}}
      </mat-icon>
    </button>
    <mat-error *ngIf="starCount == null || starCount == 0">
      Star count is <strong>required</strong> and cannot be zero
    </mat-error>
    <p class="body-2">
        Your rated <span class="body-2">{{rating}}</span> / <span class="body-2">{{starCount}}</span>
    </p>
  `,
  styles: [
  ]
})
export class StarRatingComponent implements OnInit {

  @Input('rating') rating: number = 3;
  @Input('starCount') starCount: number = 5;
  @Input('color') color: string = 'accent';
  @Output() private ratingUpdated = new EventEmitter();

  snackBar = inject(MatSnackBar);
  private snackBarDuration: number = 2000;
  ratingArr: number[] = [];

  ngOnInit() {
    console.log("a " + this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}