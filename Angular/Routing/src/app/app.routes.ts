import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Dashboard1Component } from './dashboard1.component';
import { Profile1Component } from './profile1.component';
import { Setting1Component } from './setting1.component';
import { Activity1Component } from './activity1.component';
import { ProdcutListComponent } from './Task2/productlist/prodcut-list.component';
import { ProductDetailComponent } from './Task2/productdetails/product-detail.component';
import { PageNotFound } from './Task6/page-not-found/page-not-found'; 
import { AdminComponent } from './Task4/admin-component/admin-component';
import { authguardGuard } from './Task4/authguard-guard';
import { Login } from './login/login';
import { EditProfile } from './Task4/edit-profile/edit-profile';
import { deactiveGuard } from './Task4/deactive-guard';
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
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //Task1
    { path: 'about', component: About},
    { path: '', component: Home },
    { path : 'contact',component:Contact},
    { path: 'home', component: Home },
    //Task 5
    // {path:'admin',loadComponent:()=>import('../app/Task5/admin/admin').then(c=>c.Admin)},
    {path:'admin1',loadChildren:()=>import('./Task5/admin/admin-module').then(c=>c.AdminModule)},
    {path:'user1',loadChildren:()=>import('./Task5/user/user-module').then(c=>c.UserModule)},
    {path:'login',component:Login},
    //Task4
    {path:'admincompo',component:AdminComponent,canActivate:[authguardGuard]},
    {path:'edit',component:EditProfile,canDeactivate:[deactiveGuard]},
    //Task 6
    {path:'**',component:PageNotFound},

];
