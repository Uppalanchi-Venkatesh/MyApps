import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { DefaultComponent } from './default/default.component';
import { GooglehomeComponent } from './googlehome/googlehome.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { TambolaComponent } from './tambola/tambola.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {title : 'Homepage'}},
  {path: 'resume', component: ResumeComponent, data: {title : 'My Resume'}},
  {path: 'tambola', component: TambolaComponent, data: {title : 'Tambola'}},
  {path: 'google', component: GooglehomeComponent, data: {title : 'Google'}},
  {path: 'apple', component: AppleComponent, data: {title : 'Apple'}},
  {path: '**', component: DefaultComponent, data: {title : 'Error'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const MyComponents = [
  HomeComponent,
  ResumeComponent,
  TambolaComponent,
  GooglehomeComponent,
  DefaultComponent,
  AppleComponent
] 
