import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    AppModule,
    StoreModule.forRoot({
      data: reducers
    })
  ]
})
export class BrowserAppModule {}
