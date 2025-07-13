import { Routes } from '@angular/router';
import { EmployeeDashboard } from './components/employee-dashboard/employee-dashboard';
import { EmployeeTable } from './components/employee-table/employee-table';
import { EmployeeForm } from './components/employee-form/employee-form';

export const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboard,
  },
  {
    path: 'Employees',
    component: EmployeeTable,
  },
  {
    path: 'Add-Employee',
    component: EmployeeForm,
  },
];
