import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProductComponent implements OnInit {

  @Input() name: string = '';
  @Input() defaultImage: string = '';
  @Input() price: number = 0;

  constructor() {

   }

  ngOnInit(): void {
  }

}
