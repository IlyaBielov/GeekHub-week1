import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatCardModule,
  MatExpansionModule,
  MatTabsModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatDatepickerModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})
export class MatirialModule { }
