import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './profile/profile';
import { Setting } from './setting/setting';

export const routes: Routes = [
    {path:'dashboard',component:Dashboard},
    {path:'profile',component:Profile},
    {path:'setting',component:Setting},
];
