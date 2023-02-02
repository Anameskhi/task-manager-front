import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
=======
import { BoardComponent } from './pages/board/board.component';

@NgModule({
  declarations: [AppComponent, BoardComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
>>>>>>> a0dbe270cd06723615378e59cc7f5dec2fb894e0
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
