import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeaComponent } from './components/homea/homea.component';
import { HomebComponent } from './components/homeb/homeb.component';
import { HighlightDirective } from './directive/highlight.directive';
import { SquarePipe } from './pipe/square.pipe';
import { AgePipe } from './pipe/age.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VhaashComponent } from './components/vhaash/vhaash.component';
import { StudentsComponent } from './components/students/students.component';   
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRouteModule } from './app-route/app-route.module';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './components/student/student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { HookComponent } from './Hooks/hook/hook.component';
import { ChildHookComponent } from './Hooks/child-hook/child-hook.component';
import { MessagesService } from './services/messages.service';
import { TdfComponent } from './components/tdf/tdf.component';
import { ReactiveComponent } from './components/reactive/reactive.component';






// let routes : Routes = [
//   {path : '', redirectTo : 'vhaash', pathMatch : 'full'},
//   {path : 'vhaash', component : VhaashComponent},
//   {path : 'homea', component : HomeaComponent},
//   {path : 'homeb', component : HomebComponent},
//   {path : 'parent', component : ParentComponent},
//   {path : 'notfound', component : PageNotFoundComponent},
//   {path : '**', redirectTo : 'notfound', pathMatch : 'full'},

// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeaComponent,
    HomebComponent,
    HighlightDirective,
    SquarePipe,
    AgePipe,
    ParentComponent,
    ChildComponent,
    VhaashComponent,
    StudentsComponent,
    PageNotFoundComponent,
    StudentComponent,
    StudentDetailsComponent,
    HookComponent,
    ChildHookComponent,
    TdfComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
      FormsModule,
     // RouterModule.forRoot(routes) ,
     AppRouteModule,
     CommonModule,
     RouterModule,
     ReactiveFormsModule
  ],
  providers: [],
  
  
  // bootstrap : [HomeaComponent]

  //  bootstrap : [ParentComponent]

  // bootstrap : [VhaashComponent]

   bootstrap: [AppComponent]
})
export class AppModule { }
