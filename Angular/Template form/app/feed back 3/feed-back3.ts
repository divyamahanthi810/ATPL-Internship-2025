import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed-back3',
  imports: [FormsModule,CommonModule],
  templateUrl: './feed-back3.html',
  styleUrl: './feed-back3.css'
})
export class FeedBack3 {
  
  feedback = {
    name: '',
    type: '',
    comments: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Feedback:', this.feedback);
  }
}

