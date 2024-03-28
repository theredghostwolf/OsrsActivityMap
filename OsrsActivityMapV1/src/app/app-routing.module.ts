import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivitylistComponent} from './activitylist/activitylist.component';

const routes: Routes = [
  {path:'overview', component: ActivitylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
