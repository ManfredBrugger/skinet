import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
//    AppRoutingModule, // MAB 122723 why not found? commening out for now
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
