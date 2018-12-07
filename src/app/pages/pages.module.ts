import {NgModule} from '@angular/core';

import {ThemeModule} from '../@theme/theme.module';
import {PagesRoutingModule} from './pages-routing.module';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Page1Component} from './page1/page1.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  DashboardComponent,
  Page1Component
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ]
})
export class PagesModule {
}
