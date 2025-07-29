import { Routes } from '@angular/router';
import { ProdcutListComponent } from './prodcut-list/prodcut-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Profile1Component } from './profile1/profile1.component';
import { Setting1Component } from './setting1/setting1.component';
import { Activity1Component } from './activity1/activity1.component';

import { AdminComponent } from './admin/admin.component';
export const routes: Routes = [
    { path: 'products', component: ProdcutListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'dashboard',
    component: Dashboard1Component,
    children: [
      { path: 'profile', component: Profile1Component },
      { path: 'settings', component: Setting1Component },
      { path: 'activity', component: Activity1Component },
      { path: '', redirectTo: 'settings', pathMatch: 'full' }, 
    { path: 'admin', component: AdminComponent},
  { path: '', redirectTo: '/edit-profile', pathMatch: 'full' }]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];
