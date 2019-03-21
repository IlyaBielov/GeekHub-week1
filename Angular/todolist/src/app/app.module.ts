import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatirialModule } from 'src/app/matirial.module';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { NavComponent } from './nav/nav.component';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';
import { ListOfTasksComponent } from './list-of-tasks/list-of-tasks.component';
import { LayoutModule } from '@angular/cdk/layout';

const appRoutes: Routes = [
  { path: 'add', component: CreateTaskFormComponent },
  { path: '', component: ListOfTasksComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavComponent,
    CreateTaskFormComponent,
    ListOfTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatirialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
