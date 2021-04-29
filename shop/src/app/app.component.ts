import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { shopReducer } from './shared/state/shop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';

}
