import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Active } from './active';
import { Fruits } from './Task2/fruits/fruits';
import { Icecream } from './Task2/icecream/icecream';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'about', component: About ,canActivate: [Active]},
    { path: '', component: Home },
    { path : 'contact',component:Contact},
    { path : 'fruits',component:Fruits},
    {path:'ice',component:Icecream },

];
