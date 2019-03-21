import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(measage: string, toggle: boolean) {
    if (toggle) {
      this.snackBar.open(measage, 'done', {
        duration: 5000,
      });
    }
  }
}
