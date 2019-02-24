import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './main/list/task/task.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './header/form/form.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './main/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HeaderComponent,
    FormComponent,
    MainComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
