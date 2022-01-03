import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectViewerComponent } from './project-viewer/project-viewer.component';
import { ProjectOverviewComponent } from './project-viewer/project-overview/project-overview.component';
import { ProjectDetailsComponent } from './project-viewer/project-details/project-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectViewerComponent,
    ProjectOverviewComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
