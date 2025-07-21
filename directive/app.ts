import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HasRole } from './has-role';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightOnHover } from './highlight-on-hover';
import { ToggleAnswer } from './toggle-answer';
@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule,HasRole,HighlightOnHover,ToggleAnswer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'FAQ List';

  // In a real app, this would come from an authentication service
  currentUserRole: string = 'admin'; // Change this to 'user1', 'user2', or 'admin' to test roles

  faqItems = [
    {
      question: 'What are the office hours?',
      answer: 'Our office hours are Monday to Friday, 9 AM to 5 PM.',
      roles: ['admin', 'user1', 'user2']
    },
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password from the "Account Settings" page.',
      roles: ['user1', 'user2']
    },
    {
      question: 'Where can I find the quarterly reports?',
      answer: 'Quarterly reports are available in the Admin Dashboard under "Reports".',
      roles: ['admin']
    },
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows returns within 30 days of purchase with a valid receipt.',
      roles: ['user1', 'user2']
    },
    {
      question: 'How do I add a new user?',
      answer: 'New users can be added through the "User Management" section in the Admin panel.',
      roles: ['admin']
    }
  ];

  // This method would be part of a real authentication service
  setRole(role: string) {
    this.currentUserRole = role;
    // You might want to refresh the component or re-evaluate visibility here if not automatically handled by Angular's change detection
  }
}
