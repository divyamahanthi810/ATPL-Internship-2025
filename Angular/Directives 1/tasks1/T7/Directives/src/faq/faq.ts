import { Component,OnInit } from '@angular/core';
import { UserRole } from '../user-role';
import { Observable } from 'rxjs';
import { UpperCasePipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AppHasRole } from '../directives/app-has-role';
interface FAQItem {
  question: string;
  answer: string;
  roles: string[]; 
}
@Component({
  selector: 'app-faq',
  imports: [UpperCasePipe,AsyncPipe,AppHasRole,CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
faqs: FAQItem[] = [
  {
    question: 'What is Angular and why use it?',
    answer: 'Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google. It\'s used for building single-page client applications using HTML and TypeScript, providing a robust structure and performance features.',
    roles: ['admin', 'user1', 'user2']
  },
  {
    question: 'How do I handle data binding in Angular?',
    answer: 'Angular offers various forms of data binding: Interpolation ({{ }}) for one-way binding from component to view, Property Binding ([property]="expression") for one-way from component to DOM property, Event Binding ((event)="handler()") for one-way from DOM event to component, and Two-Way Data Binding ([(ngModel)]="property") for synchronizing data between component and view.',
    roles: ['user1', 'user2']
  },
  {
    question: 'What is the purpose of a primary key in a DBMS?',
    answer: 'A primary key is a column or a set of columns in a table that uniquely identifies each row (or record) in that table. It enforces entity integrity, ensuring that each record is unique and can be referenced reliably.',
    roles: ['admin']
  },
  {
    question: 'How do I optimize database query performance?',
    answer: 'Optimizing database queries often involves creating appropriate indexes, avoiding SELECT * (selecting only necessary columns), using LIMIT clauses for pagination, normalizing data to reduce redundancy, and optimizing JOIN operations.',
    roles: ['user1', 'user2']
  },
  {
    question: 'Explain the concept of ACID properties in transactions.',
    answer: 'ACID is an acronym for Atomicity, Consistency, Isolation, and Durability. These are a set of properties that guarantee valid database transactions. Atomicity ensures all operations in a transaction succeed or none do. Consistency ensures transactions bring the database from one valid state to another. Isolation ensures concurrent transactions execute independently. Durability ensures committed transactions are permanent.',
    roles: ['admin']
  }
];

  currentRole$: Observable<string>;

  constructor(private userRoleService: UserRole) {
    this.currentRole$ = this.userRoleService.currentRole$;
  }

  ngOnInit(): void {}

  setRole(role: string): void {
    this.userRoleService.setRole(role);
  }
}
