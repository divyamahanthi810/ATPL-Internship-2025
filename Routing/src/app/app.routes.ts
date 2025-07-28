import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { New } from './new/new';
import { Active } from './active';

export const routes: Routes = [
    { path: 'login', component: New },
    { path: 'about', component: About ,canActivate: [Active]},
    { path: 'home', component: Home },
];
