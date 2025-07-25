import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
@Component({
  selector: 'app-task5',
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule ],
  templateUrl: './task5.html',
  styleUrl: './task5.css'
})
export class Task5 {
 isDarkTheme = false;

  displayedColumns: string[] = ['id', 'name', 'Grade'];
  dataSource = [
    {id: 1, name: 'Kiran', Grade: 'A'},
    {id: 2, name: 'Priya', Grade: 'B'},
    {id: 3, name: 'Gautam', Grade: 'A+'},
    {id: 4, name: 'Kumar', Grade: 'C'},
    {id: 5, name: 'Raju', Grade: 'B'},
    {id: 6, name: 'Naveen', Grade: 'A'},
    {id: 7, name: 'Dileep', Grade: 'A'},
    {id: 8, name: 'Aravind', Grade: 'C'},
    {id: 9, name: 'Krishnan', Grade: 'A+'},
    {id: 10, name: 'Mohit', Grade: 'B'},
    {id: 11, name: 'Navya', Grade: 'C'},
    {id: 12, name: 'Sandhya', Grade: 'A'}
  ];

  constructor(private dialog: MatDialog) {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  openDialog() {
    this.dialog.open(DialogContent);
  }
  
}

@Component({
  selector: 'dialog-content',
  imports:[MatDialogContent,MatDialogActions],
  template: `
    <h2 mat-dialog-title>Dialog</h2>
    <mat-dialog-content>
      <p>Welcome Student</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `
})
export class DialogContent {}

