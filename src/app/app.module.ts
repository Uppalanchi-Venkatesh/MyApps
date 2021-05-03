import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TambolaComponent } from './tambola/tambola.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GooglehomeComponent } from './googlehome/googlehome.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    TambolaComponent,
    ResumeComponent,
    HomeComponent,
    GooglehomeComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
