import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CreateGearSetupComponent } from './create-gear-setup/create-gear-setup.component';

const routes: Routes = [
  {path: 'overview', component: ActivityListComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'createsetup', component: CreateGearSetupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
