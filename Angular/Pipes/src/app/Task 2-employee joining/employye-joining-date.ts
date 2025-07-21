import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employye-joining-date',
  imports: [DatePipe ],
  templateUrl: './employye-joining-date.html',
  styleUrl: './employye-joining-date.css'
})
export class EmployyeJoiningDate {
  currentDate=new Date();
  newDate=new Date('2022-01-09')
}
