import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Angular2AirDatepickerModule } from 'angular2-air-datepicker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { TaskComponent } from './shared/components/task/task.component';
import { FormComponent } from './shared/components/form/form.component';
import { ListComponent } from './shared/components/list/list.component';
import { DataComponent } from './shared/components/data/data.component';

import { InputFocusDirective } from './shared/directives/input-focus.directive';
import { DateFilterPipe } from './shared/pipes/date-filter.pipe';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'new', component: FormComponent },
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
    DataComponent,
    InputFocusDirective,
    DateFilterPipe
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
