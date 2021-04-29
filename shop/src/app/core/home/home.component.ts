import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShopActions, shopReducer, shopSelectors } from 'src/app/shared/state/shop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent implements OnInit, OnDestroy {

  public bannerImage = ""
  public search: string = '';
  public optionsUpdated$ = new BehaviorSubject<string>('');
  public products$ = combineLatest([this.store$.select(shopSelectors.selectProducts), this.optionsUpdated$]).pipe(
    map(([products, search]) =>
      products.filter((product) => this.matches(search, product.name))
    ),
  )

  constructor(
    private store$: Store<shopReducer.ShopState | shopReducer.ShopState>,

  ) { }

  ngOnInit(): void {
    this.store$.dispatch(ShopActions.loadProducts())
  }

  ngOnDestroy(): void {
    this.store$.dispatch(ShopActions.applicationClosed());
  }

  public onSearchOptions(search: string): void {
    this.search = search;
    this.optionsUpdated$.next(this.search);
  }

  private skipMatch(value = ''): boolean {
    return value === '' || !value.length;
  }

  private matches(search: string, productName: string): boolean {
    if (this.skipMatch(search)) {
      return true;
    }
    return (
      productName.toLowerCase().indexOf(search.toLocaleLowerCase()) >= 0
    );
  }
}
