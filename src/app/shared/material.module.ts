import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule, MatChipsModule, MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatMenuModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatChipsModule
  ]

})
export class MaterialModule {
}
