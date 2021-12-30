import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectOverviewComponent } from './project/project-overview/project-overview.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectOverviewComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
