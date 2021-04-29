import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Input() validSearchLength = 0;
  @Input() placeholder = 'Search';
  @Output() search: EventEmitter<string> = new EventEmitter();
  public searchFormControl = new FormControl();
  public clearIcon = '×';
  private searchValueChange$: Subscription;

  constructor() { 
    this.searchValueChange$ = this.searchFormControl.valueChanges.subscribe((v) =>
      this.onSearch(v)
    );
  }
  ngOnInit(): void {
      this.searchValueChange$ = this.formControlSubscription();
  }

  ngOnDestroy(): void {
      this.searchValueChange$.unsubscribe();
  }

  /**
   * Emits the search term
   * @param event
   */
  public onSearch(value: string): void {
      const validSearchTerm = value.length >= this.validSearchLength;
      const manualDelete = !value.length;
      if (validSearchTerm || manualDelete) {
          this.search.emit(value);
      }
  }

  public onClear(): void {
      const resetValue = '';
      this.searchFormControl.setValue(resetValue);
      this.onSearch(resetValue);
  }

  private formControlSubscription(): Subscription {
      return this.searchFormControl.valueChanges.subscribe((v) =>
          this.onSearch(v)
      );
  }
}
