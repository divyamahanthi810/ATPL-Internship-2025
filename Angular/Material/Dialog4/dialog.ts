import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dialogcontent } from '../dialogcontent/dialogcontent';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css'
})
export class Dialog {
constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialogcontent, {
      width: '500px',
      height: 'fit-content',
      data: { userInput: '' } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Confirmed PhoneNumber Submitted!', 'Close', {
          duration: 3000
        });
      } else {
        this.snackBar.open('Cancelled!', 'Close', {
          duration: 3000
        });
      }
    });
  }

}
