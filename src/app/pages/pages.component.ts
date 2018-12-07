import {Component} from '@angular/core';
import {MENU_ITEMS} from './pages-menu';

@Component({
  selector: 'zkwl-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <zkwl-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </zkwl-one-column-layout>
  `
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
