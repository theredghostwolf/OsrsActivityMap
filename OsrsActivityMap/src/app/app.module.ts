import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateGearSetupComponent } from './create-gear-setup/create-gear-setup.component';
import { MapComponent } from './map/map.component';
import { GeTrackerComponent } from './ge-tracker/ge-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ActivityListComponent,
    NavbarComponent,
    CreateGearSetupComponent,
    MapComponent,
    GeTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
