import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-apollo-angular-example-banner',
  template: `<header>{{ title }}</header>`,
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() title = '';
}
