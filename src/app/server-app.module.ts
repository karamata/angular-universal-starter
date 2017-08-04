import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { reducers } from './reducers';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

export function onBootstrap(appRef: ApplicationRef) {
  return () => {
    appRef.isStable
      .filter(stable => stable)
      .first()
      .subscribe(() => {
        
      });
  };
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    ServerModule,

    AppModule,
    StoreModule.forRoot({
      data: reducers
    })
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: onBootstrap,
      multi: true,
      deps: [
        ApplicationRef,
      ]
    }
  ]
})
export class ServerAppModule {

}
