import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'



import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { AjaxComponent } from './components/ajax/ajax.component';

@NgModule({
  declarations: [
    AppComponent,
    AjaxComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
