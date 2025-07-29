import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login2 } from './login2/login2';

const routes: Routes = [
  {path:'login2',component:Login2}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
