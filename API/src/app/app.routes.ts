import { Routes } from '@angular/router';
import { Data3Component } from './JWT/data3/data3.component';
import { LoginpageComponent } from './JWT/loginpage/loginpage.component';
export const routes: Routes = [
    {path:'data',component:Data3Component},
    {path:'',component:LoginpageComponent}
];
