import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import { Store } from '@ngrx/store';

@Component({
  selector: 'lazy-view',
  template: `<h3>message from lazy : {{ message }}</h3>`
})
export class LazyView {}

@NgModule({
  declarations: [LazyView],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyView, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {
  message: string

  constructor(private store: Store<any>) {
    this.message = String(store.source.getValue().data.message);
  }
}
