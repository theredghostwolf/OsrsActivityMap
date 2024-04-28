import { NgModule, importProvidersFrom } from '@angular/core';
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
import { SlayerGuideComponent } from './slayer-guide/slayer-guide.component';
import { BlogComponent } from './blog/blog.component';
import { MarkdownComponent, MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ActivityListComponent,
    NavbarComponent,
    CreateGearSetupComponent,
    MapComponent,
    GeTrackerComponent,
    SlayerGuideComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MarkdownModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideMarkdown()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
