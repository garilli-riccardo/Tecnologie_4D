import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooCompononent } from './foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooCompononent
  ],
  imports: [
    BrowserModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
