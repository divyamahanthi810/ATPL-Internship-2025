import { Component,ViewChild } from '@angular/core';
import { HasRole } from '../has-role';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hasrole',
  imports: [HasRole,CommonModule],
  templateUrl: './hasrole.html',
  styleUrl: './hasrole.css'
})
export class Hasrole {
  userRole: 'admin' | 'user1' | 'user2' = 'user1';

  faqs = [
    { question: 'What is Angular?', answer: 'Angular is a TypeScript-based web framework.', roles: ['admin', 'user1', 'user2'], showAnswer: false },
    { question: 'What is a Directive?', answer: 'Directives are classes that add behavior to elements.', roles: ['admin', 'user2'], showAnswer: false },
    { question: 'What is a Component?', answer: 'A component controls a patch of the screen called a view.', roles: ['admin', 'user1', 'user2'], showAnswer: false }
  ];

  @ViewChild(HasRole) hasRoleDirective!: HasRole;

  ngAfterViewInit() {
    this.hasRoleDirective.setUserRole(this.userRole);
  }

  toggleAnswer(faq: any) {
    if (this.userRole !== 'admin') {
      faq.showAnswer = !faq.showAnswer;
    }
  }
}
