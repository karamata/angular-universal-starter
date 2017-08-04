import { Component, OnInit } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Store } from '@ngrx/store';
import * as actions from './actions';

@Component({
  selector: 'demo-app',
  template: `
    <h1>Universal Demo using Angular</h1>
    <a routerLink="/">Home</a>
    <a routerLink="/lazy">Lazy</a>
    <router-outlet></router-outlet>
  `,
  styles: [
    `h1 {
      color: green;
    }`
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<any>) {
      console.log('fuck all');
      store.dispatch(new actions.LoadHomeAction({
        message: 'Load from Home'
      }));
  }

  ngOnInit() {
  }
}
