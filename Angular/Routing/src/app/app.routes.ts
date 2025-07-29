import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { PageNotFound } from './Task6/page-not-found/page-not-found'; 
import { AdminComponent } from './Task4/admin-component/admin-component';
import { authguardGuard } from './Task4/authguard-guard';
import { Login } from './login/login';
import { EditProfile } from './Task4/edit-profile/edit-profile';
import { deactiveGuard } from './Task4/deactive-guard';

export const routes: Routes = [
    //Task1
    { path: 'about', component: About},
    { path: '', component: Home },
    { path : 'contact',component:Contact},
    { path: 'home', component: Home },
    //Task 5
    {path:'admin',loadComponent:()=>import('../app/Task5/admin/admin').then(c=>c.Admin)},
    {path:'admin1',loadChildren:()=>import('./Task5/admin/admin-module').then(c=>c.AdminModule)},
    {path:'user1',loadChildren:()=>import('./Task5/user/user-module').then(c=>c.UserModule)},
    {path:'login',component:Login},
    //Task4
    {path:'admincompo',component:AdminComponent,canActivate:[authguardGuard]},
    {path:'edit',component:EditProfile,canDeactivate:[deactiveGuard]},
    //Task 6
    {path:'**',component:PageNotFound},
];
