import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dialogcontent',
  imports: [ FormsModule ,CommonModule,MatLabel,MatDialogContent,MatDialogActions,MatFormField],
  templateUrl: './dialogcontent.html',
  styleUrl: './dialogcontent.css'
})
export class Dialogcontent {
  userInput: string = '';
  constructor(
    public dialogRef: MatDialogRef<Dialogcontent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
