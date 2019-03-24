import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Angular2AirDatepickerModule } from 'angular2-air-datepicker';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './_header/header.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './_main/main.component';
import { ListComponent } from './list/list.component';
import { DataComponent } from './data/data.component';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: FormComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HeaderComponent,
    FormComponent,
    MainComponent,
    ListComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    Angular2AirDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
