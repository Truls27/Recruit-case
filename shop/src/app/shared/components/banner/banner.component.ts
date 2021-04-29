import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  @Input() Image: any;
  @Input() size = "medium";
  @Output() bannerClicked: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }

  onClick($event: any): void {
    this.bannerClicked.emit($event)
  }

}
