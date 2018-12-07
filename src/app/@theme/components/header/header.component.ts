import { Component, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'zkwl-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService) {
  }

  ngOnInit() {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
