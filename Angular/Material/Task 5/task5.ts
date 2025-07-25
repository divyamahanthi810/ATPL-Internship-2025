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

  displayedColumns: string[] = ['id', 'name', 'role'];
  dataSource = [
    {id: 1, name: 'John Doe', role: 'Developer'},
    {id: 2, name: 'Jane Smith', role: 'Designer'},
    {id: 3, name: 'Mike Johnson', role: 'Manager'}
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
      <p>This is a sample dialog!</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `
})
export class DialogContent {}

