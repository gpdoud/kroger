import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCvExperienceComponent } from './my-cv-experience/my-cv-experience.component';
import { MyCvEducationComponent } from './my-cv-education/my-cv-education.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCvExperienceComponent,
    MyCvEducationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
