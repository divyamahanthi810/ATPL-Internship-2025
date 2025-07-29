import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login1 } from './login1/login1';
const routes: Routes = [
  {path:'login1',component:Login1},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
