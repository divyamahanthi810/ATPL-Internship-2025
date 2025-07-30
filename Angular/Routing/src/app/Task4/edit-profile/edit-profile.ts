import { Component } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-edit-profile',
  imports: [RouterLink,RouterLinkActive,ReactiveFormsModule,FormsModule ,CommonModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css'
})
export class EditProfile {
  username=" ";
  dirty=false; 
  onUserChange(event:Event){
    this.dirty=true;
}
}