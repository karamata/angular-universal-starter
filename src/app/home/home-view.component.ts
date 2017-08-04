import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'home-view',
  template: `<h3>message from home : {{ message }}</h3>`
})
export class HomeView {
  public message: string;

  constructor(private store: Store<any>) {
    this.message = String(store.source.getValue().data.message);
  }
}
