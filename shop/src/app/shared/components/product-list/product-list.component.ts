import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../services/models/user.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] | null;

  constructor() {
    this.products = [];
   }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(    this.products
      )
  }
}
