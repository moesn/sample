import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';


export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...NbAuthModule.forRoot({

    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000
      })
    ],
    forms: {
    }
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*'
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*'
      }
    }
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NbAuthModule
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS
      ]
    };
  }
}
