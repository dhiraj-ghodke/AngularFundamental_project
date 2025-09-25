import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { VhaashComponent } from '../components/vhaash/vhaash.component';
import { HomeaComponent } from '../components/homea/homea.component';
import { HomebComponent } from '../components/homeb/homeb.component';
import { ParentComponent } from '../components/parent/parent.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { StudentComponent } from '../components/student/student.component';
import { StudentDetailsComponent } from '../components/student-details/student-details.component';
import { HookComponent } from '../Hooks/hook/hook.component';
import { TdfComponent } from '../components/tdf/tdf.component';
import { ReactiveComponent } from '../components/reactive/reactive.component';

let routes : Routes = [
  {path : '', redirectTo : 'vhaash', pathMatch : 'full'},
  {path : 'vhaash', component : VhaashComponent},
  {path : 'homea', component : HomeaComponent},
  {path : 'homeb', component : HomebComponent},
  {path : 'parent', component : ParentComponent},
  {path : 'student', component : StudentComponent},
  {path : 'student/:rn', component : StudentDetailsComponent},
  {path : 'notfound', component : PageNotFoundComponent},
  {path : 'hook', component : HookComponent},
  {path : 'tdf', component : TdfComponent},
  {path : 'reactive', component : ReactiveComponent},
  {path : '**', redirectTo : 'notfound', pathMatch : 'full'},
  

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRouteModule { }
