import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { TambolaComponent } from './tambola/tambola.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'tambola', component: TambolaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
